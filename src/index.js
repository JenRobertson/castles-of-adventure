import './assets/style.css';
import { addDesignerButtons, updateHistoryButtons, saveMapToHistory } from './buttons.js'
import { STORE } from './store.js';
import { draw } from './draw.js';
import { getBlockSprite } from './blocks.js';

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
    canvasElement.addEventListener('mouseup', (e) => {interactStop()});
    canvasElement.addEventListener('mouseleave', (e) => {interactStop()});
    canvasElement.addEventListener('mouseenter', (e) => {interactStop()});
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
            if (map.key[map.data[character.y + 1][character.x].block].walkable) {
                character.y++;
            }
            break;
        case "KeyW":
        case "ArrowUp":
            if (map.key[map.data[character.y - 1][character.x].block].walkable) {
                character.y--;
            }
            break;
        case "KeyA":
        case "ArrowLeft":
            if (map.key[map.data[character.y][character.x - 1].block].walkable) {
                character.x--;
            }
            break;
        case "KeyD":
        case "ArrowRight":
            if (map.key[map.data[character.y][character.x + 1].block].walkable) {
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

function interactStop() {
    if (clicked) {
        saveMapToHistory();
    }
    clicked = false;
}

function click() {
    if (!clicked) return;

    // coordinates of where on map click was
    const dataX = Math.trunc(cursorX / STORE.sizeOfBlock);
    const dataY = Math.trunc(cursorY / STORE.sizeOfBlock);

    const isObject = STORE.map.key[STORE.activeMaterial].isObject;
    const dataElement = STORE.map.data[dataY][dataX];

  switch (STORE.activeTool) {
        case STORE.tools.brush:
            if (isObject) {
                if (!STORE.map.key[dataElement.block].walkable) return; // Dont draw object on non walkable block
                dataElement.item = STORE.activeMaterial;
            } else {
                if (!STORE.map.key[STORE.activeMaterial].walkable) dataElement.item = ''; // If this is non walkable block then delete the object
                dataElement.block = STORE.activeMaterial;
                makeEdges(dataY, dataX)
            }
            break;
        case STORE.tools.fill:
            if (isObject) break;
            fillBucket(dataX, dataY, dataElement.block);
            // make edges for whole map
            for (let y = 0; y < STORE.map.data.length; y++) {
                for (let x = 0; x < STORE.map.data[0].length; x++) {
                    STORE.map.data[y][x].block = getBlockSprite(STORE.map, y, x);
                }
            }
            break;
    }
    draw();
}

function makeEdges(y, x){
    const map = STORE.map;
    // check edges for 9 blocks around the block
    for (let yOffset = -1; yOffset < 2; yOffset++) {
        for (let xOffset = -1; xOffset < 2; xOffset++) {
            const xCoordinate = x + xOffset;
            const yCoordinate = y + yOffset;
            const mapBlock = STORE.map.data[yCoordinate] && STORE.map.data[yCoordinate][xCoordinate] && STORE.map.data[yCoordinate][xCoordinate].block;

            if (mapBlock) {
                STORE.map.data[yCoordinate][xCoordinate].block = getBlockSprite(map, yCoordinate, xCoordinate);
            }
        }
    }
}

function fillBucket(x, y, typeToFill) {
    if (typeof STORE.map.data[y] === 'undefined' || typeof STORE.map.data[y][x] === 'undefined') return;
    if (STORE.map.data[y][x].block === STORE.activeMaterial) return; // already filled
    if (STORE.map.data[y][x].block !== typeToFill) return; // we should not fill this, wrong colour
    STORE.map.data[y][x].block = STORE.activeMaterial;

    fillBucket(x - 1, y, typeToFill);
    fillBucket(x + 1, y, typeToFill);
    fillBucket(x, y - 1, typeToFill);
    fillBucket(x, y + 1, typeToFill);
}
