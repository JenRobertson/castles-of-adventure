import './assets/style.css';
import { map1 } from './map1.js';

let STORE = {
    increase: 1,
    map: map1,
    character: {
        x: 2,
        y: 6
    }
};

const VERSION = '0.0.0';
const HEIGHT = 500 * STORE.increase;
const WIDTH = 500 * STORE.increase;
const numberOfSquares = 20;
const sizeOfBlock = WIDTH / numberOfSquares;

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
    window.addEventListener('resize', resize, false);
    window.addEventListener('keydown', keydown, true);
    addPolyfills();
    draw();
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
    STORE.ctx.fillStyle = 'red';
    STORE.ctx.fillRect(STORE.character.x * sizeOfBlock, STORE.character.y * sizeOfBlock, sizeOfBlock, sizeOfBlock);
}

function drawMap() {
    const map = STORE.map;
    for (let y = 0; y < map.data.length; y++) {
        for (let x = 0; x < map.data.length; x++) {
            STORE.ctx.fillStyle = map.key[map.data[y][x]].colour;
            STORE.ctx.fillRect(x * sizeOfBlock, y * sizeOfBlock, sizeOfBlock, sizeOfBlock);
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
