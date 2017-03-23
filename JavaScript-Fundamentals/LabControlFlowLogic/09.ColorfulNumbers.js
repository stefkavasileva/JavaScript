function printNumToN([n]) {
    n=Number(n);
    console.log("<ul>")
    for (let i = 1; i <=n; i++) {
        console.log(`   <li><span style='color:${i%2==0?"blue":"green"}'>${i}</span></li>`)
    }
    console.log("</ul>")
}

