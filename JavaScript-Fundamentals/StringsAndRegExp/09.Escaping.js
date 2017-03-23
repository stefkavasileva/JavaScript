function main(inputArr) {
    let htmlText=`<ul>\n`;
    let specialSymbols=['&','>','<','\"'];
    for (let i = 0; i < inputArr.length; i++) {
       let currentElement=inputArr[i];
        for (let j = 0; j < specialSymbols.length; j++) {
            let currentSymbol=specialSymbols[j];
            let replacement;
            if(specialSymbols[j]=='<'){
                replacement="&lt;";
            }else if(specialSymbols[j]=='>'){
                replacement="&gt;"
            }else if(specialSymbols[j]=='&'){
                replacement="&amp;"
            }else if(specialSymbols[j]=='\"'){
                replacement="&quot;"
            }

            let regex=new RegExp(currentSymbol,'g');

            currentElement=currentElement.replace(regex, replacement);
        }
        htmlText+=`    <li>${currentElement}</li>\n`
    }
    htmlText+=`</ul>`;
    console.log(htmlText);
}
