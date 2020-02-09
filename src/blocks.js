export function getBlockLocation(map, y, x) {
    const block = map.key[map.data[y][x]];
    const blockType = block.type;
    if (!block.hasEdges) return block.sprite;
    let blockLabelArray = [blockType];

    const blockAbove = map.key[map.data[y - 1] && map.data[y - 1][x]];
    const blockBelow =  map.key[map.data[y + 1] && map.data[y + 1][x]];
    const blockLeft = map.key[map.data[y][x - 1]];
    const blockRight = map.key[map.data[y][x + 1]];
    
    const blockAboveType = blockAbove && blockAbove.type; 
    const blockBelowType = blockBelow && blockBelow.type; 
    const blockLeftType = blockLeft && blockLeft.type; 
    const blockRightType = blockRight && blockRight.type; 
    

    if (blockAboveType !== blockType &&
        blockBelowType !== blockType &&
        blockLeftType !== blockType &&
        blockRightType !== blockType) {
        return blockLabelArray[0];
    }

    if (blockAboveType === blockType && blockBelowType === blockType) {
        blockLabelArray.push('middle')
    } else if (blockAboveType !== blockType) {
        blockLabelArray.push('top')
    } else if (blockBelowType !== blockType) {
        blockLabelArray.push('bottom')
    }
    
    if (blockLeftType === blockType && blockRightType === blockType) {
        blockLabelArray.push('middle')
    } else if (blockLeftType !== blockType) {
        blockLabelArray.push('left')
    } else if (blockRightType !== blockType) {
        blockLabelArray.push('right')
    }

    return blockLabelArray.join('-');
}