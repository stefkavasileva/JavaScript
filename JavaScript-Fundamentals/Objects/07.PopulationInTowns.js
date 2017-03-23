function populationCount(inputArr) {

    let townsPopulations=new Map();

    for (let i = 0; i < inputArr.length; i++) {
        let townArgs=inputArr[i].split(/\s*<->\s*/g).filter(x=>x!="");
        let townName=townArgs[0];
        let population=Number(townArgs[1]);

        if(townsPopulations.has(townName)){
            townsPopulations.set(townName,townsPopulations.get(townName)+population)
        }else{
            townsPopulations.set(townName,population);
        }

    }

    for (let [key, value] of townsPopulations.entries()) {
        console.log(key + " : " + value);
    }
}
