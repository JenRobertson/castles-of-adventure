import { STORE } from './store.js';
import { getSprite } from './assetLoader.js'

export function draw() {
    STORE.ctx.clearRect(0, 0, 10000, 10000);
    drawMap();
    drawCharacter();
}

function drawCharacter() {
    STORE.ctx.fillStyle = 'lime';
    STORE.ctx.fillRect(STORE.character.x * STORE.sizeOfBlock, STORE.character.y * STORE.sizeOfBlock, STORE.sizeOfBlock, STORE.sizeOfBlock);
}

function drawMap() {
    const map = STORE.map;
    for (let y = 0; y < map.data.length; y++) {
        for (let x = 0; x < map.data.length; x++) {
            STORE.ctx.drawImage(getSprite(map.key[map.data[y][x]].sprite), x * STORE.sizeOfBlock, y * STORE.sizeOfBlock, STORE.sizeOfBlock, STORE.sizeOfBlock);
        }
    }
}
