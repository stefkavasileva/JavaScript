function main([scoreJSON]) {
    let html = "<table>\n";
    html += " <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr){
        html += `\t<tr><td>${htmlEscape(obj['name'])}</td>`
        html+=`<td>${htmlEscape(obj['score'])}</td></tr>\n`;
    }
    html += "</table>";

    function htmlEscape(text) {
        text=new String(text);
        let map={'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;','>': '&gt;'};
        return text.replace(/[\"&'<>]/g,ch=>map[ch]);
    }

    console.log(html);
}