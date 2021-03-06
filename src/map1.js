const makeMultiArray = (width, height) => {
    const array = new Array(height);

    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(width);
      for (let j = 0; j < array[i].length; j++) {
        array[i][j] = { block: 'blank', item: ''};
      }
    }
    console.log(array)
    return array;
};

export const map1 = {
    key: {
        blank: { sprite: 'blank',walkable: false },
        tiles: { sprite: 'tiles', walkable: true },
        water: { sprite: 'water', walkable: false },
        sand: { sprite: 'sand', walkable: true },
        grass: { sprite: 'grass', walkable: true },
        'door-red': { sprite: 'door-red', walkable: false},

        'key-red': { sprite: 'key-red', walkable: false, isObject: true},
        'key-yellow': { sprite: 'key-yellow', walkable: false, isObject: true},

        'wall': { type: 'wall', sprite: 'wall', hasEdges: true, walkable: false, hasEdges: true},
        'wall-bottom-left-right': { type: 'wall', sprite: 'wall-bottom-left-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-left': { type: 'wall', sprite: 'wall-bottom-left', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-right': { type: 'wall', sprite: 'wall-bottom-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom': { type: 'wall', sprite: 'wall-bottom', walkable: false , isEdge: true, hasEdges: true},
        'wall-left-right': { type: 'wall', sprite: 'wall-left-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-left': { type: 'wall', sprite: 'wall-left', walkable: false , isEdge: true, hasEdges: true},
        'wall-right': { type: 'wall', sprite: 'wall-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-bottom-left-right': { type: 'wall', sprite: 'wall-top-bottom-left-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-left-right': { type: 'wall', sprite: 'wall-top-left-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-bottom-left': { type: 'wall', sprite: 'wall-top-bottom-left', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-bottom-right': { type: 'wall', sprite: 'wall-top-bottom-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-bottom': { type: 'wall', sprite: 'wall-top-bottom', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-left': { type: 'wall', sprite: 'wall-top-left', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-right': { type: 'wall', sprite: 'wall-top-right', walkable: false , isEdge: true, hasEdges: true},
        'wall-top': { type: 'wall', sprite: 'wall-top', walkable: false , isEdge: true, hasEdges: true},

        'wall-top-br': { type: 'wall', sprite: 'wall-top-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-tr': { type: 'wall', sprite: 'wall-bottom-tr', walkable: false , isEdge: true, hasEdges: true},
        'wall-left-tr': { type: 'wall', sprite: 'wall-left-tr', walkable: false , isEdge: true, hasEdges: true},
        'wall-right-tl': { type: 'wall', sprite: 'wall-right-tl', walkable: false , isEdge: true, hasEdges: true},

        'wall-top-bl': { type: 'wall', sprite: 'wall-top-bl', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-tl': { type: 'wall', sprite: 'wall-bottom-tl', walkable: false , isEdge: true, hasEdges: true},
        'wall-left-br': { type: 'wall', sprite: 'wall-left-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-right-bl': { type: 'wall', sprite: 'wall-right-bl', walkable: false , isEdge: true, hasEdges: true},

        'wall-top-bl-br': { type: 'wall', sprite: 'wall-top-bl-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-tl-tr': { type: 'wall', sprite: 'wall-bottom-tl-tr', walkable: false , isEdge: true, hasEdges: true},
        'wall-left-tr-br': { type: 'wall', sprite: 'wall-left-tr-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-right-tl-bl': { type: 'wall', sprite: 'wall-right-tl-bl', walkable: false , isEdge: true, hasEdges: true},


        'wall-bottom-left-tr': { type: 'wall', sprite: 'wall-bottom-left-tr', walkable: false , isEdge: true, hasEdges: true},
        'wall-bottom-right-tl': { type: 'wall', sprite: 'wall-bottom-right-tl', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-left-br': { type: 'wall', sprite: 'wall-top-left-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-top-right-bl': { type: 'wall', sprite: 'wall-top-right-bl', walkable: false , isEdge: true, hasEdges: true},

        'wall-bl': { type: 'wall', sprite: 'wall-bl', walkable: false , isEdge: true, hasEdges: true},
        'wall-br': { type: 'wall', sprite: 'wall-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl': { type: 'wall', sprite: 'wall-tl', walkable: false , isEdge: true, hasEdges: true},
        'wall-tr': { type: 'wall', sprite: 'wall-tr', walkable: false , isEdge: true, hasEdges: true},

        'wall-bl-br': { type: 'wall', sprite: 'wall-bl-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl-bl': { type: 'wall', sprite: 'wall-tl-bl', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl-br': { type: 'wall', sprite: 'wall-tl-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl-tr': { type: 'wall', sprite: 'wall-tl-tr', walkable: false , isEdge: true, hasEdges: true},
        'wall-tr-bl': { type: 'wall', sprite: 'wall-tr-bl', walkable: false , isEdge: true, hasEdges: true},
        'wall-tr-br': { type: 'wall', sprite: 'wall-tr-br', walkable: false , isEdge: true, hasEdges: true},

        'wall-tl-bl-br': { type: 'wall', sprite: 'wall-tl-bl-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl-tr-bl': { type: 'wall', sprite: 'wall-tl-tr-bl', walkable: false , isEdge: true, hasEdges: true},
        'wall-tl-tr-br': { type: 'wall', sprite: 'wall-tl-tr-br', walkable: false , isEdge: true, hasEdges: true},
        'wall-tr-bl-br': { type: 'wall', sprite: 'wall-tr-bl-br', walkable: false , isEdge: true, hasEdges: true},
        
        'wall-tl-tr-bl-br': { type: 'wall', sprite: 'wall-tl-tr-bl-br', walkable: false , isEdge: true, hasEdges: true},
    },
    data: makeMultiArray(100, 100)
}