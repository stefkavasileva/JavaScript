function countWords([input]) {
    let words=input.toLowerCase().split(/[^A-Za-z\d_]+/).filter(w=>w!="");
    let wordsCount=new Map();

    for (let i = 0; i < words.length; i++) {
        let w=words[i];
        if(wordsCount.has(w)){
            wordsCount.set(w,wordsCount.get(w)+1)
        }else{
            wordsCount.set(w, 1);
        }

    }
    let wordsArr=Array.from(wordsCount.keys()).sort();
    wordsArr.forEach(w=>console.log(`'${w}' -> ${wordsCount.get(w)} times`));

}
