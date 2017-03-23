function printTriangleOfStars(n) {
    n=Number(n);
    let line='';
    for (let row = 1; row <=n ; row++) {
        for (let col = 1; col <= row; col++) {
            line+="$";
        }
        console.log(line);
        line='';
    }
}
