function readSpeedAndZone([speed,zone]) {

    let limit=getLimit();
    function getLimit() {
        switch (zone){
            case "motorway": return 130; break;
            case "interstate": return 90; break;
            case  "city" :return  50; break;
            case  "residential": return  20;break;
        }
    }

    speed=Number(speed);
    let infraction= getInfraction(speed,limit);

    function getInfraction(speed,limit) {
        let overSpeed=speed-limit;
        if(overSpeed<=0){
            return " ";
        }else  if(overSpeed>0 && overSpeed<=20){
            return "speeding";
        }else if(overSpeed>20 && overSpeed<=40){
            return "excessive speeding";
        }else if(overSpeed>40){
            return "reckless driving";
        }
    }

    console.log(infraction);
}

