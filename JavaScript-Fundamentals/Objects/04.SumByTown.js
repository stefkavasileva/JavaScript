function main(inputArr) {
    let towns={};
    for (let i = 0; i < inputArr.length; i+=2) {
        let town=inputArr[i];
        let income=Number(inputArr[i+1]);
        if(!towns[town]){
            towns[town]=0;
        }
         towns[town]+=income;

    }
    let json=JSON.stringify(towns);
    console.log(json);

}
