function main(inputArr) {
    let regex = new RegExp(/[\d]+/g);
    let result = "";
    for (let i = 0; i < inputArr.length; i++) {

        let temp="";
        while ((temp = regex.exec(inputArr[i])) !== null) {
            result += temp + " ";
        }
        ;
    }
    console.log(result);
}
