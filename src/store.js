import { map1 } from './map1.js';

export let STORE = {
    increase: 1,
    map: map1,
    character: {
        x: 2,
        y: 6
    },
    activeMaterial: 0,
    activeTool: 0,
    tools: {
        brush: 'BRUSH',
        fill: 'FILL',
    }
};
