function main([email]) {
    let regex=new RegExp(/\b[A-Za-z\d]+@[a-z]+\.[a-z]+\b/);

    if(email.match(regex)){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}
