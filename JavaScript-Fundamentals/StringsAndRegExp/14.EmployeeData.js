function main(inputArr) {
    let regex=new RegExp(/(^[A-Z][A-Za-z]*) - ([1-9]+[0-9]*) - ([A-Za-z\d \-]+)$/g);
    let match;
    for (let i = 0; i < inputArr.length; i++) {
        while (match=regex.exec(inputArr[i])){
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }

    }
}