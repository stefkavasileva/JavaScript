function main(input) {
    let products=new Map();
    for (let i = 0; i < input.length; i++) {
        let productArgs=input[i].split(":").map(x=>x.trim());
        let productName=productArgs[0];
        let productQuantity=Number(productArgs[1]);

        products.set(productName,productQuantity);
    }

    let orderedProduct=Array.from(products.keys()).sort();
    let previousFirstLetter='';
    for(let p of orderedProduct){
        let firstLetter=p.substr(0,1);
        if(firstLetter!=previousFirstLetter){
            console.log(firstLetter);
        }
        console.log(` ${p}: ${products.get(p)}`);
        previousFirstLetter=firstLetter;
    }
}
