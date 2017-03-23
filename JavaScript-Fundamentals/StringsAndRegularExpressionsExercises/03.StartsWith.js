function main([text,pattern]) {
    let index=text.indexOf(pattern);
    if(index>=0){
        console.log(true);
    }else {
        console.log(false);
    }
}
