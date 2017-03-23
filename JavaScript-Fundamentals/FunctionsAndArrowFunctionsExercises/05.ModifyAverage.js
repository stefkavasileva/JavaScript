function checkAverage(number) {
    number=Number(number);
    let digitCount=0;
    let sumFromDigits=0;
    let tempNum=number
    while (tempNum!=0){
        digitCount++;
        sumFromDigits+=tempNum%10;
        tempNum= Math.trunc(tempNum/10);
    }

    let  average=sumFromDigits/digitCount;
    if (average>5){
        console.log(number);
        return;
    }

    while (average<=5){
        sumFromDigits=0;
        digitCount=0;
        tempNum=number+''+9;
        tempNum=Number(tempNum);
        let secondTempNum=tempNum;
        while (secondTempNum!=0){
            digitCount++;
            sumFromDigits+=secondTempNum%10;
            secondTempNum= Math.trunc(secondTempNum/10);
        }
        average=sumFromDigits/digitCount;
        number=number+''+9;
    }

    console.log(tempNum);
}
