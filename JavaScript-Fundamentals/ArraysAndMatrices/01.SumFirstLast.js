function main(inputArr){
    let firstNum=Number(inputArr[0]);
    let lastNum=Number(inputArr[inputArr.length-1]);
    function calcSum(firsNum,secondNum) {
        return firsNum+secondNum;
    }

    let sum=calcSum(firstNum,lastNum);
    console.log(sum);
}

