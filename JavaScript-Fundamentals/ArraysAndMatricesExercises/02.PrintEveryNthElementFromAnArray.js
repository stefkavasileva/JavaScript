function main(input) {
    let step= input[input.length-1];
    step=Number(step);
    let result=[];
   result.push(input[0]);
   input.pop();
   input.shift();

    for (let i = step-1; i < input.length; i+=step) {
       result.push(input[i]);

    }
    console.log(result.join("\n"));

}
