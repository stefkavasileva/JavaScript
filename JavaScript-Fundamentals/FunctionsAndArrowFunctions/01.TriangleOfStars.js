function printTrangleOfStars(n) {
    n=Number(n);

    for (let row = 1; row <=n; row++) {
        let currentLine='';
        for (let col = 1; col <=row ; col++) {
            currentLine+="*"
        }
        console.log(currentLine);
    }

    for (let row = n-1; row >= 1; row--) {
        let currentLine="";
        for (let col = row; col >=1 ; col--) {
            currentLine+="*";
        }
        console.log(currentLine);
    }
}
