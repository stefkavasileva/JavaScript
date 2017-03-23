function main(inputArr) {

    let map=new Map();

    for (let i = 0; i < inputArr.length; i++) {
      let saleArgs=inputArr[i].split(/\s*->\s*/g).filter(x=>x!="");
      let townName=saleArgs[0];
      let product=saleArgs[1];
      let sale=saleArgs[2].split(/\s*:\s*/g).map(Number);
      let amountOfSales=sale[0];
      let price=sale[1];

      if(!map.has(townName)){
          map.set(townName,new Map()) ;
      }

      if(!map.get(townName).has(product)){
          map.get(townName).set(product,0);
      }

      map.get(townName).set(product,map.get(townName).get(product)+(amountOfSales*price));

    }

    for(let [townName, sales] of map){
        console.log(`Town - ${townName}`);
        for(let [product,income] of sales ){
            console.log(`$$$${product} : ${income}`);
        }
    }


}
