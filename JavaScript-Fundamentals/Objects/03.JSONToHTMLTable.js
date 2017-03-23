function main([input]) {
    let arr = JSON.parse(input);

    let htmlTable = "<table>\n";
    htmlTable += "\t<tr>";
    for (let key of Object.keys(arr[0])){
        htmlTable+=`<th>${htmlEscape(key)}</th>`
    }
    htmlTable += "</tr>\n";
    input=input.slice(0,1);
    for (let obj of arr ){
        htmlTable += `\t<tr>`;

        for(let value of Object.values(obj)){
            htmlTable+=`<td>${htmlEscape(value)}</td>`;
        }
        htmlTable+=`</tr>\n`;
    }


    htmlTable += "</table>";

    function htmlEscape(text) {
        text=new String(text);
        let map={'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;','>': '&gt;'};
        return text.replace(/[\"&'<>]/g,ch=>map[ch]);
    }
    console.log(htmlTable);
}