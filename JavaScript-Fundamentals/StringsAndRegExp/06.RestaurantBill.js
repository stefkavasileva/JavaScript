function main(inputArr) {
    let purchases=inputArr.filter((x,i)=>i%2==0);
    let totalPrices=inputArr
        .filter((x,i)=>i%2!=0)
        .map(Number)
        .reduce(function (a,b) {
        return a+b;
    });

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${totalPrices}`);
}