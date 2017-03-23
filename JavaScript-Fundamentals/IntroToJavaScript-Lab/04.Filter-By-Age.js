function filterByAge(inputLine) {
    let minimumAge=Number(inputLine[0]);
    let firstPerson={name:inputLine[1],age:Number(inputLine[2])};
    let secondPerson={name:inputLine[3],age:Number(inputLine[4])};
    let people=[firstPerson,secondPerson];

    let result=people.filter(x=>x.age>=minimumAge);
    for (let i = 0; i < result.length; i++) {

        console.log(result[i]);
    }
}
