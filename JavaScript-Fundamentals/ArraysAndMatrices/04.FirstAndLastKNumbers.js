function main(inputArr) {
    inputArr=inputArr.map(Number);
    let k=inputArr.shift();

    let firstKNums=inputArr.slice(0,k);
    let lastKNums=inputArr.slice(inputArr.length-k);
    console.log(firstKNums)
    console.log(lastKNums);
}
