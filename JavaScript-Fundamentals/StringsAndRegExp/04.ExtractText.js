function main([text]) {
    let result=[];
    let count=0;

    let secondIndex=-1;
    while (true){
        let firstIndex=text.indexOf('(',secondIndex+1);

        if(firstIndex<0){
            break;
        }

         secondIndex=text.indexOf(')',firstIndex+1);

        if(secondIndex<0){
            break;
        }

        result[count]=text.substring(firstIndex+1,secondIndex).trim();
        text= text.replace('(',"");
        text= text.replace(')',"");
        count++;
    }

    console.log(result.join(", "))
}
