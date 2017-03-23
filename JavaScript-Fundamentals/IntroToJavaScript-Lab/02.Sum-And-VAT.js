function calcVatAndTotalSum(inputArr) {
    inputArr=inputArr.map(Number);
    let sum=0;
    for (let i=0;i< inputArr.length;i++){
        sum+=inputArr[i];
    }
    let vat=sum*0.2;
    let totalSum=sum+vat;

    console.log("sum = "+sum);
    console.log("VAT = "+vat);
    console.log("total = "+totalSum)

}
