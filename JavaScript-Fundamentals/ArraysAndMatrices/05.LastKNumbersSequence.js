function main([n,k]) {
    [n,k]=[n,k].map(Number);

    let numbers=[];
    numbers[0]=1;
    for (let i =1 ; i <n ; i++) {
        let sum=0;
        for (let j = i-k; j <=i-1; j++) {
           if(j>=0){
               sum+=numbers[j];
           }
        }
        numbers[i]=sum;
    }

    console.log(numbers.join(" "))
}
