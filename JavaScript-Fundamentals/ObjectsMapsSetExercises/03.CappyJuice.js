function main(input) {

    let juices=new Map();
    let juiceBottles=new Map();
    for (let i = 0; i < input.length; i++) {
        let line=input[i].split(/=>/g).map(x=>x.trim());
        let juiceName=line[0];
        let juiceQuantity=Number(line[1]);

        if(!juices.has(juiceName)){
            juices.set(juiceName,0);
        }

        juices.set(juiceName,juices.get(juiceName)+juiceQuantity);
        let totalQuantity=juices.get(juiceName);
        let bottles=Math.trunc(totalQuantity/1000);
        if(bottles>0){
            let remainder=Math.trunc(totalQuantity%1000);
            juices.set(juiceName,remainder);

            if(!juiceBottles.has(juiceName)){
                juiceBottles.set(juiceName,0);
            }

            juiceBottles.set(juiceName,juiceBottles.get(juiceName)+bottles);
        }
    }

    for(let [juiceName,bottles] of juiceBottles){
        console.log(`${juiceName} => ${bottles}`);
    }
}


