function printChessboard([n]) {
    n=Number(n);
    console.log(`<div class=\"chessboard">`)
    for (let row = 0; row < n; row++) {
        console.log(`   <div>`)
        for (let col = 0; col < n; col++) {
           console.log(`    <span class=${(col+row)%2==0?"\"black\"":"\"white\""}></span>`)
        }
        console.log(`   </div>`)
    }
    console.log(`</div>`)
}