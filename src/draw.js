import { STORE } from './store.js';
import { getSprite } from './assetLoader.js'

export function draw() {
    STORE.ctx.clearRect(0, 0, 10000, 10000);
    drawMap();
    drawItems();
    drawCharacter();
}

function drawCharacter() {
    STORE.ctx.fillStyle = 'lime';
    STORE.ctx.fillRect(STORE.character.x * STORE.sizeOfBlock, STORE.character.y * STORE.sizeOfBlock, STORE.sizeOfBlock, STORE.sizeOfBlock);
}

function drawMap() {
    const map = STORE.map;
    for (let y = 0; y < map.data.length; y++) {
        for (let x = 0; x < map.data[0].length; x++) {
            STORE.ctx.drawImage(getSprite(map.key[map.data[y][x].block].sprite), x * STORE.sizeOfBlock, y * STORE.sizeOfBlock, STORE.sizeOfBlock, STORE.sizeOfBlock);
        }
    }
}

function drawItems() {
    const map = STORE.map;
    for (let y = 0; y < map.data.length; y++) {
        for (let x = 0; x < map.data.length[0]; x++) {
            if (map.data[y][x].item) {
                STORE.ctx.drawImage(getSprite(map.key[map.data[y][x].item].sprite), x * STORE.sizeOfBlock, y * STORE.sizeOfBlock, STORE.sizeOfBlock, STORE.sizeOfBlock);
            }
        }
    }
}