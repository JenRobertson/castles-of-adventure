import './assets/style.css';
import { addDesignerButtons, updateHistoryButtons } from './buttons.js'
import { STORE } from './store.js';
import { draw } from './draw.js';

let mousePositionFix, clicked, cursorX, cursorY;

const VERSION = '0.0.0';
const HEIGHT = 600;
const WIDTH = 600;
const numberOfSquares = 20;
STORE.sizeOfBlock = HEIGHT / numberOfSquares;

// things needed to show loading bar
const canvasElement = document.createElement("canvas");
canvasElement.height = HEIGHT;
canvasElement.width = WIDTH;
STORE.ctx = canvasElement.getContext("2d", {alpha: false});
STORE.ctx.imageSmoothingEnabled = false;
document.body.append(canvasElement);
resize();

window.onload = function () {
    console.log('version ' + VERSION);
    addEventListeners();
    addPolyfills();
    addDesignerButtons();
    draw();
    saveMapToHistory();
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
    click();
}

function interactMove(x, y){
    cursorX = Math.trunc((x - canvasElement.offsetLeft)  * mousePositionFix);
    cursorY = Math.trunc((y- canvasElement.offsetTop) * mousePositionFix);
    click();
}

function interactStop(e) {
    clicked = false;
    saveMapToHistory();
}

function click() {
    if (!clicked) return;

    // coordinates of where on map click was
    const dataX = Math.trunc(cursorX / STORE.sizeOfBlock);
    const dataY = Math.trunc(cursorY / STORE.sizeOfBlock);
    
    switch (STORE.activeTool) {
        case STORE.tools.brush:
            STORE.map.data[dataY][dataX] = STORE.activeMaterial
            break;
        case STORE.tools.fill:
            fillBucket(dataX, dataY, STORE.map.data[dataY][dataX]);
            break;
    }
    draw();
}

function fillBucket(x, y, typeToFill) {
    if(typeof STORE.map.data[y] === 'undefined' || typeof STORE.map.data[y][x] === 'undefined') return;
    if (STORE.map.data[y][x] === STORE.activeMaterial) return; // already filled
    if (STORE.map.data[y][x] !== typeToFill) return; // we should not fill this, wrong colour
    STORE.map.data[y][x] = STORE.activeMaterial;

    fillBucket(x - 1, y, typeToFill);
    fillBucket(x + 1, y, typeToFill);
    fillBucket(x, y - 1, typeToFill);
    fillBucket(x, y + 1, typeToFill);
}

function saveMapToHistory() {
    // if we have gone back in time and then draw again, remove the future first.
    STORE.history.splice(0,STORE.historyIndex);
    STORE.history.unshift(JSON.parse(JSON.stringify(STORE.map.data)));
    STORE.historyIndex = 0;
    updateHistoryButtons();
}