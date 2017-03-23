function main(inputArr) {
    let text = inputArr[0];
    inputArr.shift();

    for (let i = 0; i < inputArr.length; i++) {
        let pattern = inputArr[i];
        let regex = new RegExp(pattern, 'g');
        text = text.replace(regex, "-".repeat(pattern.length));

    }
    console.log(text);
}