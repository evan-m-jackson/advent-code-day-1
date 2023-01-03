export class ElfCalories {
    bigNum: number;
    smallNum: number;
    constructor()
    {
        this.bigNum = 0;
        this.smallNum = 0;
    }

    maxCalorie(list:(number | string)[]): number {
        for (var num of list) {
            num = Number(num);
            this.update(num);
        }
        this.updateBigAndResetSmall();
        return this.bigNum;
    }
    
    update(num: number){
        if (num == 0){ 
            this.updateBigAndResetSmall();
        }
        else{
            this.updateSmallNumber(num);
        }
    }

    updateBigAndResetSmall() {
        this.updateBigNumber();
        this.resetSmallNumber();
    }
    
    updateBigNumber() {
        this.bigNum = Math.max(this.bigNum, this.smallNum);
    }
    
    updateSmallNumber(num: number) {
        this.smallNum += num;
    }
    
    resetSmallNumber() {
        this.smallNum = 0;
    }
}

