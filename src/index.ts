export function maxCalorie(list:(number | string)[]): number {
    let bigNum: number = 0;
    let smallNum: number = 0;

    for (var num of list) {
        if (Number.isInteger(num))
        {
            smallNum += Number(num);
            
        }
        else{
            bigNum = updateBigNumber(bigNum, smallNum);
            smallNum = 0;
        }
    }

    bigNum = updateBigNumber(bigNum, smallNum);

    return bigNum;
}

function updateBigNumber(bigNum: number, smallNum: number): number {
    return Math.max(bigNum, smallNum);
}