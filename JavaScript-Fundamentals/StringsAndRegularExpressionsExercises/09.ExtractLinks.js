function main(inputArr) {
    let regex = /www\.[A-Za-z\d\-]+\.[A-Za-z]+(\.[A-Za-z]+)*/g;
    let validLinks=[];
    for (let i = 0; i < inputArr.length; i++) {
        let match=regex.exec(inputArr[i]);
        while (match){
            validLinks.push(match[0]);
            match=regex.exec(inputArr[i]);
        }
    }

    console.log(validLinks.join('\n'));
}
