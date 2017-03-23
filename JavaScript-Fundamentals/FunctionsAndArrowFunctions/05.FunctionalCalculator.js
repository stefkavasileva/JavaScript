function calculator([firstNum,secondNum,operator]) {
    firstNum=Number(firstNum);
    secondNum=Number(secondNum);
    if (operator=="+"){
        console.log(firstNum+secondNum);
    }else if(operator=="-"){
        console.log(Math.abs(firstNum-secondNum));
    }else if(operator=="*"){
        console.log(firstNum*secondNum);
    }else if(operator=="/"){
        console.log(firstNum/secondNum);
    }else if(operator=="%"){
        console.log(firstNum%secondNum);
    }
}
