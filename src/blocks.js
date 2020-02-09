export function getBlockLocation(map, y, x) {
    const block = map.key[map.data[y][x]];
    const blockType = block.type || block.sprite;
    if (!block.hasEdges) return blockType;
    let blockLabelArray = [blockType];

    const blockAbove = map.key[map.data[y - 1] && map.data[y - 1][x]];
    const blockBelow =  map.key[map.data[y + 1] && map.data[y + 1][x]];
    const blockLeft = map.key[map.data[y][x - 1]];
    const blockRight = map.key[map.data[y][x + 1]];
    
    const blockAboveType = blockAbove && blockAbove.type; 
    const blockBelowType = blockBelow && blockBelow.type; 
    const blockLeftType = blockLeft && blockLeft.type; 
    const blockRightType = blockRight && blockRight.type; 

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

    return blockLabelArray.join('-');
}