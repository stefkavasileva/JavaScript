function  main(inputArr) {
    let oddElements=inputArr.filter((x,i)=>i%2==0);
    console.log(oddElements.join(" "));
}
