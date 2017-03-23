function roundingNum(inputArr) {
    let numToBeRound=Number(inputArr[0]);
    let precisionNum=Number(inputArr[1]);
    if (precisionNum>15){
        precisionNum=15;
    }
    let result=numToBeRound.toFixed(precisionNum);
    result=parseFloat(result);
    console.log(result);
}
