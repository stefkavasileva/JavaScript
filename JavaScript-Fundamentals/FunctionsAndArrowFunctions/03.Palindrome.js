function isPalindrome(inputLine) {
    let word=inputLine[0];
    let isPalindrome=true;
    for (let i = 0; i <word.length/2; i++) {
        if(word[i]!=word[word.length-i-1]){
            isPalindrome=false;
        }
    }
    console.log(isPalindrome);
}
