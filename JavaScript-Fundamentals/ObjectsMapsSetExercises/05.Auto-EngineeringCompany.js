function main(input) {
   let cars=new Map();
    for (let i = 0; i < input.length; i++) {
       let carArgs=input[i].split("|").map(x=>x.trim());
       let carBrand=carArgs[0];
       let carModel=carArgs[1];
       let producedCars=Number(carArgs[2]);

       if(!cars.has(carBrand)){
           cars.set(carBrand,new Map());
       }

       if(!cars.get(carBrand).has(carModel)){
           cars.get(carBrand).set(carModel,0);
       }

       cars.get(carBrand).set(carModel,cars.get(carBrand).get(carModel)+producedCars);
    }
    for(let [carBrand, models] of cars){
        console.log(carBrand);
        for(let [carModel,producedCars] of models ){
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }

}


