function countLetter(inputArr) {
    let string=inputArr[0];
    let letter=inputArr[1];
    let letterCount=0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            letterCount++;
        }
    }
    console.log(letterCount);
}

