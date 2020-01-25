import { STORE } from './store.js';
import { getSprite } from './assetLoader.js'
import { draw } from './draw';

export function addDesignerButtons() {
    // colour palette buttons
    for (const key in STORE.map.key) {
        const element = STORE.map.key[key];    
        let button = document.createElement("button");
        button.classList.add('button-block');
        button.innerHTML = `<img src='${getSprite(element.sprite).src}'></img>`;
        button.onclick = function() {
            STORE.map.key[STORE.activeMaterial].button.classList.remove('active');
            STORE.activeMaterial = parseInt(key);
            STORE.map.key[STORE.activeMaterial].button.classList.add('active');
        };
    document.body.append(button);
        element.button = button;
        STORE.map.key[STORE.activeMaterial].button.classList.add('active')
    }


    // brush button
    let brushButton = document.createElement("button");
    brushButton.innerHTML = `<img src='${getSprite('pencil-tool').src}'></img>`;
    brushButton.classList.add('button-tool');
    brushButton.onclick = function() {
        if (STORE.activeTool === STORE.tools.brush) {
            STORE.activeTool = null;
            document.body.style.cursor = `auto`;	
            brushButton.classList.remove('active');
        } else {
            STORE.activeTool = STORE.tools.brush;
            document.body.style.cursor = `url('${getSprite('pencil-tool').src}') 0 32, auto`;	
            brushButton.classList.add('active');
            fillButton.classList.remove('active');
        }
    }
    document.body.append(brushButton);

    // fill button
    let fillButton = document.createElement("button");
    fillButton.innerHTML = `<img src='${getSprite('fill-tool').src}'></img>`;
    fillButton.classList.add('button-tool');
    fillButton.onclick = function() {
        if (STORE.activeTool === STORE.tools.fill) {
            STORE.activeTool = null;
            document.body.style.cursor = `auto`;	
            fillButton.classList.remove('active');
        } else {
            STORE.activeTool = STORE.tools.fill;
            document.body.style.cursor = `url('${getSprite('fill-tool').src}') 32 16, auto`;	
            fillButton.classList.add('active');
            brushButton.classList.remove('active');
        }
    }
    document.body.append(fillButton);

    // clear button
    let clearButton = document.createElement("button");
    clearButton.innerHTML = 'Clear';
    clearButton.classList.add('button-tool');
    clearButton.onclick = function() {
        STORE.map.data.forEach(element => {
            element.fill(3);
        });
        draw();
    }
    document.body.append(clearButton);

    // save data button
    let saveMapButton = document.createElement("button");
    saveMapButton.innerHTML = 'Copy Map';
    saveMapButton.classList.add('button-tool');
    saveMapButton.onclick = function() {
        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = JSON.stringify(STORE.map.data);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    document.body.append(saveMapButton);
}