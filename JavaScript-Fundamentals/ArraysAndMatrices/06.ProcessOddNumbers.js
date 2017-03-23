function main(inputArr) {
    inputArr=inputArr.map(Number);
    let result=inputArr
        .filter((x,i)=>Math.trunc(i%2!=0))
        .map(x=>x*2)
        .reverse();
    console.log(result);
}