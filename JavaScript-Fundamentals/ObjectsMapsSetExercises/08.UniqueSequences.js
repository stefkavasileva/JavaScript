function main(input) {
    let seqs = new Set();
    for(let row of input) {
        let arr = JSON.parse(row).map(Number).sort((a, b) => b - a);
        let arrayToAdd = `[${arr.join(', ')}]`;
        seqs.add(arrayToAdd);
    }
    let result = Array.from(seqs)
        .sort((a,b) =>a.split(', ').length - b.split(', ').length);

    result.forEach(arr => console.log(arr));
}

