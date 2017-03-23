function jsonToHtmlTable(inputArr) {
    let htmlTable=`<table>\n`;
    for (let i = 0; i < inputArr.length; i++) {
        let employee=JSON.parse(inputArr[i]);
        htmlTable+=`\t<tr>\n`;
        htmlTable+=`\t\t<td>${htmlEscape(employee["name"])}</td>\n`;
        htmlTable+=`\t\t<td>${htmlEscape(employee["position"])}</td>\n`;
        htmlTable+=`\t\t<td>${htmlEscape(employee["salary"]) }</td>\n`;
        htmlTable+=`\t<tr>\n`;
    }
    htmlTable+=`</table>`;
    console.log(htmlTable);

    function htmlEscape(text) {
        text=new String(text);
        let map={'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;','>': '&gt;'};
        return text.replace(/[\"&'<>]/g,ch=>map[ch]);
    }
}

