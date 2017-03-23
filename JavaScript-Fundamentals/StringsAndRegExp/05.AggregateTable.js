function main(inputArr) {

    let result=[];
    let sum=0;
    for (let i = 0; i < inputArr.length; i++) {
       let currentLine=inputArr[i].split('|').filter(x=>x.trim());
       result.push(currentLine[0].trim());
       sum+=Number(currentLine[1]);
    }

    console.log(result.join(", "));
    console.log(sum);
}
