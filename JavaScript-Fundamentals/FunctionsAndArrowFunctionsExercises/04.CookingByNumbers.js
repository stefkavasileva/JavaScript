function operationWithNumber(inputArr) {
    let number=Number(inputArr[0]);
    for (let i = 1; i < inputArr.length; i++) {
        let operation=inputArr[i];
        if(operation=="chop"){
            number/=2;
        }else if(operation=="dice"){
            number=Math.sqrt(number);
        }else if(operation=="spice"){
            ++number;
        }else if(operation=="bake"){
            number*=3;
        }else if(operation=="fillet"){
            number-=number*0.2;
        }
        console.log(number);
    }
}
