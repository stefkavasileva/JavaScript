function printAggregatedElements(inputArr) {
    inputArr=inputArr.map(Number);
    let sum=0;
    let inverseSum=0;
    let concatNum='';
    for (let i = 0; i < inputArr.length; i++) {
       sum+=inputArr[i];
       inverseSum+=1/inputArr[i];
       concatNum+=inputArr[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatNum);
}
