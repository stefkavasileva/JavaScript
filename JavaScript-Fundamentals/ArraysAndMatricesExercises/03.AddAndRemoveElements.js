function main(commands) {
    let num=1;
    let result=[];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i]=="add"){
            result.push(num);
        }else {
            result.pop();
        }
        num++;
    }

    if(result.length==0){
        console.log("Empty");
        return;
    }
    console.log(result.join('\n'));

}
