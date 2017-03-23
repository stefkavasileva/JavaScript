function main(inputArr) {
    let regex = new RegExp(/\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g);
    let match;
    for (let i = 0; i < inputArr.length; i++) {

        while (match = regex.exec(inputArr[i])) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}
