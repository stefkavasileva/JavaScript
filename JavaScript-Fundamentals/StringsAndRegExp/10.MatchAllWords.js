function main([text]) {

    let regex=new RegExp(/[\w]+/g);
    let words=[];
    let match;
    while (match = regex.exec(text)) {
        words.push(match[0]);
    }

    console.log(words.join('|'));
}
