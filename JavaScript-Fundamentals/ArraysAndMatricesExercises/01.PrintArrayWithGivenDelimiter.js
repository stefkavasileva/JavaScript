function main(input) {
    let delimiter=input[input.length-1];
    input=input.splice(0,input.length-1);
    console.log(input.join(delimiter));
}
