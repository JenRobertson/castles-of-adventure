export function getBlockSprite(map, y, x) {
    const block = map.key[map.data[y][x]];
    const blockType = block.type || block.sprite;
    if (!block.hasEdges) return blockType;
    let blockLabelArray = [blockType];
    
    const blockAboveType = getType(map, y - 1, x);
    const blockBelowType = getType(map, y + 1, x);
    const blockLeftType = getType(map, y, x - 1);
    const blockRightType = getType(map, y, x + 1);

    if (blockAboveType !== blockType) {
        blockLabelArray.push('top')
    }

    if (blockBelowType !== blockType) {
        blockLabelArray.push('bottom')
    }
    
    if (blockLeftType !== blockType) {
        blockLabelArray.push('left')
    }

    if (blockRightType !== blockType) {
        blockLabelArray.push('right')
    }

    if (blockLabelArray.length === 1) { // middle wall

        const blockTopLeft = getType(map, y - 1, x - 1);
        const blockTopRight = getType(map, y - 1, x + 1);
        const blockBottomLeft = getType(map, y + 1, x - 1);
        const blockBottomRight = getType(map, y + 1, x + 1);

        if (blockTopLeft !== blockType) {
            blockLabelArray.push('tl');
        }
    
        if (blockTopRight !== blockType) {
            blockLabelArray.push('tr');
        }
        
        if (blockBottomLeft !== blockType) {
            blockLabelArray.push('bl');
        }
    
        if (blockBottomRight !== blockType) {
            blockLabelArray.push('br');
        }
    }
    else if (blockLabelArray.length === 2) { 
        const blockTopLeft = getType(map, y - 1, x - 1);
        const blockTopRight = getType(map, y - 1, x + 1);
        const blockBottomLeft = getType(map, y + 1, x - 1);
        const blockBottomRight = getType(map, y + 1, x + 1);

        let cornerLabelArray = [];
        
        if (blockLabelArray.includes('top')) {
            if (blockBottomLeft !== blockType) {
                cornerLabelArray.push('bl');
            }
            if (blockBottomRight !== blockType) {
                cornerLabelArray.push('br');
            }
        }

        if (blockLabelArray.includes('bottom')) {
            if (blockTopLeft !== blockType) {
                cornerLabelArray.push('tl');
            }
            if (blockTopRight !== blockType) {
                cornerLabelArray.push('tr');
            }
        }
                
        if (blockLabelArray.includes('left')) {
            if (blockTopRight !== blockType) {
                cornerLabelArray.push('tr');
            }
            if (blockBottomRight !== blockType) {
                cornerLabelArray.push('br');
            }
        }

        if (blockLabelArray.includes('right')) {
            if (blockTopLeft !== blockType) {
                cornerLabelArray.push('tl');
            }
            if (blockBottomLeft !== blockType) {
                cornerLabelArray.push('bl');
            }
        }

        if(cornerLabelArray.length) blockLabelArray.push(cornerLabelArray.join('-'));

    }
    else if (blockLabelArray.length === 3) {
        const blockTopLeft = getType(map, y - 1, x - 1);
        const blockTopRight = getType(map, y - 1, x + 1);
        const blockBottomLeft = getType(map, y + 1, x - 1);
        const blockBottomRight = getType(map, y + 1, x + 1);

        let cornerLabelArray = [];
        
        if (blockLabelArray.includes('bottom')) {
            if (blockLabelArray.includes('left')) {
                if (blockTopRight !== blockType) {
                    cornerLabelArray.push('tr');
                }
            } 
            else if (blockLabelArray.includes('right')) {
                if (blockTopLeft !== blockType) {
                    cornerLabelArray.push('tl');
                }
            }
        }

        if (blockLabelArray.includes('top')) {
            if (blockLabelArray.includes('left')) {
                if (blockBottomRight !== blockType) {
                    cornerLabelArray.push('br');
                }
            } 
            else if (blockLabelArray.includes('right')) {
                if (blockBottomLeft !== blockType) {
                    cornerLabelArray.push('bl');
                }
            }
        }
   
        const topBottom = blockLabelArray.includes('top') && blockLabelArray.includes('bottom');
        const leftRight = blockLabelArray.includes('left') && blockLabelArray.includes('right');

        if(!topBottom & !leftRight && cornerLabelArray.length) blockLabelArray.push(cornerLabelArray.join(''));
    }

    return blockLabelArray.join('-');
}

function getType(map, y, x) {
    const block = map.key[map.data[y] && map.data[y][x]];
    if (block && block.type) return block.type;
    return null;
}