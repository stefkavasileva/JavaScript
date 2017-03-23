function main(inputArr) {
    let usernameArr=[];
    for (let i = 0; i < inputArr.length; i++) {
        let emailArgs=inputArr[i].split('@');
        let username=emailArgs[0]+'.';
        let domainArgs=emailArgs[1].split('.');
        for (let j = 0; j < domainArgs.length; j++) {
            let firstLetter=domainArgs[j].substring(0,1);
            username+=firstLetter;

        }

        usernameArr.push(username);

    }
console.log(usernameArr.join(', '));
}
