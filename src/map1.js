export const map1 = {
    key: {
        blank: { sprite: 'blank',walkable: false },
        tiles: { sprite: 'tiles', walkable: true },

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

        water: { sprite: 'water', walkable: false },
        sand: { sprite: 'sand', walkable: true }
    },
    data: [
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank'],
        ['blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank','blank']
    ]
}