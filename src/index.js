import './assets/style.css';
import { map1 } from './map1.js';
import { getSprite } from './assetLoader.js'

let mousePositionFix, clicked, cursorX, cursorY;
let STORE = {
    increase: 1,
    map: map1,
    character: {
        x: 2,
        y: 6
    },
    activeTool: 0
};

const VERSION = '0.0.0';
const HEIGHT = 600;
const WIDTH = 600;
const numberOfSquares = 20;
const sizeOfBlock = HEIGHT / numberOfSquares;

// things needed to show loading bar
const canvasElement = document.createElement("canvas");
canvasElement.height = HEIGHT;
canvasElement.width = WIDTH;
STORE.ctx = canvasElement.getContext("2d", {alpha: false});
STORE.ctx.imageSmoothingEnabled = false;
document.body.append(canvasElement);
resize();
addDesignerButtons();

function addDesignerButtons() {
    for (const key in STORE.map.key) {
        const element = STORE.map.key[key];    
        let button = document.createElement("button");
        button.classList.add('button-block');
        button.innerHTML = `<img src='${getSprite(element.sprite).src}'></img>`;
        button.onclick = function() {
            STORE.activeTool = parseInt(key);
        };
        document.body.append(button);
    }
    let button = document.createElement("button");
    button.innerHTML = 'Save map data to clipboard';
    button.classList.add('button-save');
    button.onclick = function() {
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = JSON.stringify(STORE.map.data);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    document.body.append(button);
}

window.onload = function () {
    console.log('version ' + VERSION);
    addEventListeners();
    addPolyfills();
    draw();
}

function addEventListeners() {
    window.addEventListener('resize', resize, false);
    window.addEventListener('keydown', keydown, true);
    canvasElement.addEventListener('mousedown',(e) => {
        e.stopPropagation();
        e.preventDefault();
        interactStart(e.pageX, e.pageY); 
    });
    canvasElement.addEventListener('mousemove', (e) => { interactMove(e.pageX, e.pageY, true)});
    canvasElement.addEventListener('mouseup', (e) => {interactStop(e)});
}

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
function keydown() {
    if (event.defaultPrevented) {
        return;
    }
    
    const { map, character } = STORE;
    switch(event.code) {
        case "KeyS":
        case "ArrowDown":
            if (map.key[map.data[character.y + 1][character.x]].walkable) {
                character.y++;
            }
            break;
        case "KeyW":
        case "ArrowUp":
            if (map.key[map.data[character.y - 1][character.x]].walkable) {
                character.y--;
            }
            break;
        case "KeyA":
        case "ArrowLeft":
            if (map.key[map.data[character.y][character.x - 1]].walkable) {
                character.x--;
            }
            break;
        case "KeyD":
        case "ArrowRight":
            if (map.key[map.data[character.y][character.x + 1]].walkable) {
                character.x++;
            }
            break;
    }
    
    draw();
    event.preventDefault();
};

function draw() {
    drawMap();
    drawCharacter();
}

function drawCharacter() {
    STORE.ctx.fillStyle = 'lime';
    STORE.ctx.fillRect(STORE.character.x * sizeOfBlock, STORE.character.y * sizeOfBlock, sizeOfBlock, sizeOfBlock);
}

function drawMap() {
    const map = STORE.map;
    for (let y = 0; y < map.data.length; y++) {
        for (let x = 0; x < map.data.length; x++) {
            STORE.ctx.drawImage(getSprite(map.key[map.data[y][x]].sprite), x * sizeOfBlock, y * sizeOfBlock, sizeOfBlock, sizeOfBlock);
        }
    }
}

function resize (){
    const canvasRatio = canvasElement.height / canvasElement.width;
    const windowRatio = window.innerHeight / window.innerWidth;
    let width;
    let height;
    
    if (windowRatio < canvasRatio) {
        height = window.innerHeight;
        width = height / canvasRatio;
    } else {
        width = window.innerWidth;
        height = width * canvasRatio;
    }
    
    canvasElement.style.width = width + 'px';
    canvasElement.style.height = height + 'px';
    mousePositionFix = getMousePositionFix();
};

function getMousePositionFix (){
    return WIDTH / canvasElement.offsetWidth;// prev 0.2
};

function addPolyfills() {
    Object.defineProperty(Array.prototype, 'flat', {
        value: function(depth = 1) {
            return this.reduce(function (flat, toFlatten) {
                return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
            }, []);
        }
    });
}

// window.onunload  = function () {
//     save();
// }

// window.pagehide = function () {
//     save();
// }

function interactStart(x, y){
    cursorX = Math.trunc((x - canvasElement.offsetLeft)  * mousePositionFix);
    cursorY = Math.trunc((y- canvasElement.offsetTop) * mousePositionFix);
    clicked = true;
    STORE.map.data[Math.trunc(cursorY / sizeOfBlock)][Math.trunc(cursorX / sizeOfBlock)] = STORE.activeTool;
    // fillBucket(Math.trunc(cursorX / sizeOfBlock), Math.trunc(cursorY / sizeOfBlock), STORE.map.data[Math.trunc(cursorY / sizeOfBlock)][Math.trunc(cursorX / sizeOfBlock)]);
    draw();
}

function interactMove(x, y){
    cursorX = Math.trunc((x - canvasElement.offsetLeft)  * mousePositionFix);
    cursorY = Math.trunc((y- canvasElement.offsetTop) * mousePositionFix);
    if (clicked) {
        STORE.map.data[Math.trunc(cursorY / sizeOfBlock)][Math.trunc(cursorX / sizeOfBlock)] = STORE.activeTool;
        draw();
    }
}

function interactStop(e) {
    clicked = false;
}

function fillBucket(x, y, typeToFill) {
    if(typeof STORE.map.data[y] === 'undefined' || typeof STORE.map.data[y][x] === 'undefined') return;
    if (STORE.map.data[y][x] === STORE.activeTool) return; // already filled
    if (STORE.map.data[y][x] !== typeToFill) return; // we should not fill this, wrong colour
    STORE.map.data[y][x] = STORE.activeTool;

    fillBucket(x - 1, y, typeToFill);
    fillBucket(x + 1, y, typeToFill);
    fillBucket(x, y - 1, typeToFill);
    fillBucket(x, y + 1, typeToFill);
}