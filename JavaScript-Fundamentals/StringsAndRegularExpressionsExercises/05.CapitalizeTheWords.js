function  main(input) {
    let words=input[0].split(' ');
    let result="";
    for (let i = 0; i < words.length; i++) {
        let currentWord=words[i];
        let firstLetter=currentWord.substr(0,1).toUpperCase();
        let otherLetters=currentWord.substr(1,currentWord.length).toLocaleLowerCase();
        result+=firstLetter+otherLetters+" ";
    }

    console.log(result);
}
