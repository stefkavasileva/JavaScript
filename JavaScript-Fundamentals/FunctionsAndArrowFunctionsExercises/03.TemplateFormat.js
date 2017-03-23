function printTemplateXML(inputArr) {
    let xml=`<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml+=`<quiz>\n`;

    for (let i = 0; i < inputArr.length; i+=2) {

        xml+=`\t<question>\n`;
        xml+=`\t\t${inputArr[i]}\n`;
        xml+=`\t</question>\n`;
        xml+=`\t<answer>\n`;
        xml+=`\t\t${inputArr[i+1]}\n`;
        xml+=`\t</answer>\n`;

    }
    xml+=`</quiz>\n`;

    console.log(xml);
}

