function main(inputArr) {
    inputArr=inputArr
        .map(Number)
        .sort(function(a, b){return a-b});
    console.log(`${inputArr[0]} ${inputArr[1]}`);
}
