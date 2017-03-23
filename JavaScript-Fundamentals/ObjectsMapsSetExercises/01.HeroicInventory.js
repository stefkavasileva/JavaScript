function main(inputArr) {
    let heroes=[];
    for (let hero of inputArr) {
        let heroArgs=hero.split(' / ').map(x=>x.trim());
        let heroName=heroArgs[0];
        let heroLevel=Number(heroArgs[1]);
        let heroItems=[];
        if(heroArgs.length>2){
            heroItems=heroArgs[2].split(/, /g);
        }

        let heroAsObj={name:heroName,level:heroLevel ,items:heroItems};
        heroes.push(heroAsObj);

    }

    let heroesAsJsonFormat=JSON.stringify(heroes);
    console.log(heroesAsJsonFormat);

}

