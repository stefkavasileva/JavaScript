function main([inputElement]) {
    let regex = new RegExp(/\b([\-]*[\d]+)[\s]*\*[\s]*([\-]*[\d]+[\.]*[\d]+)\b/);
    let match;
    while (match=regex.exec(inputElement)){
        let firstNumber=Number(match[1]);
        let secondNumber=Number(match[2]);
        let result=firstNumber*secondNumber;
        inputElement=inputElement.replace(match[0],result);
    }
    console.log(inputElement);
    
}