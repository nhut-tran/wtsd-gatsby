export const getBlockData = (data = [], blockName) => {
    const block = data.find(block => block[blockName]);

    return block[blockName];

}