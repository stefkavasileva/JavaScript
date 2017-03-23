function main(input) {
    let systems=new Map();

    for (let i = 0; i < input.length; i++) {
        let systemArgs=input[i].split("|").map(x=>x.trim()).filter(x=>x!="");
        let systemName=systemArgs[0];
        let componentName=systemArgs[1];
        let subcomponentName=systemArgs[2];

        if(!systems.has(systemName)){
            systems.set(systemName,new Map());
        }

        if(!systems.get(systemName).has(componentName)){
            systems.get(systemName).set(componentName,[]);
        }

        systems.get(systemName).get(componentName).push(subcomponentName);

    }

    function mySortFunction(a, b) {
        if(Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
            if(a > b) return 1;
            if(a < b) return -1;
        } else {
            return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
        }
    }

    let systemsSorted = Array.from(systems.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(systems.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(systems.get(s1).size != systems.get(s2).size) {
            return systems.get(s2).size - systems.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
    }

}
