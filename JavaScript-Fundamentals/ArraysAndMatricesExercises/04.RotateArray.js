function main(inputArr) {
    let rotations=inputArr[inputArr.length-1];
    rotations=Number(rotations);
    inputArr.pop();
    for (let i = 0; i < rotations; i++) {
        let firstElement=inputArr[inputArr.length-1];
        inputArr.pop();
        inputArr.unshift(firstElement);
    }

    console.log(inputArr.join(' '));

}

