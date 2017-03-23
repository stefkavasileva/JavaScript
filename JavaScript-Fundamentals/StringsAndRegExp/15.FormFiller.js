function main(inputArr) {
    let username=inputArr[0];
    let email=inputArr[1];
    let phoneNumber=inputArr[2];
    inputArr=inputArr.slice(3);
    for (let i = 0; i < inputArr.length; i++) {
        let userNameRegex=/<![A-Za-z]+!>/g;
        let emailRegex=/<@[A-Za-z]+@>/g;
        let phoneNumberRegex=/<\+[A-Za-z]+\+>/g;
        inputArr[i]=inputArr[i].replace(userNameRegex,username);
        inputArr[i]=inputArr[i].replace(emailRegex,email);
        inputArr[i]=inputArr[i].replace(phoneNumberRegex,phoneNumber);

    }
    console.log(inputArr.join("\n"));
}
