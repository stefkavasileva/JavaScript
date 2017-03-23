function count([input]) {
    let words=input.split(/[^A-Za-z\d_]/).filter(w=>w!="");
    let wordsCount={};
    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        if(!wordsCount[word]){
            wordsCount[word]=0;
        }
        wordsCount[word]++;
    }
    let jsonFormat=JSON.stringify(wordsCount);
    console.log(jsonFormat);
}