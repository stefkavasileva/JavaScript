function main([text]) {
    let varNames=[];

    let regex = /\b\_([A-Za-z\d]+)\b/g;
    let match=regex.exec(text);

    while (match){
        varNames.push(match[1]);
        match=regex.exec(text);
    }

    console.log(varNames.join(","));
}
