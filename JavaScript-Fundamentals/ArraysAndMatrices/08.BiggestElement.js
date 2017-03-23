function main(matrix) {
    let biggestNum=-100000;
    for (let row = 0; row < matrix.length; row++) {
        let currentRow=matrix[row].split(' ').map(Number);
        for (let col = 0; col <currentRow.length; col++) {
           if(currentRow[col]>biggestNum){
               biggestNum=currentRow[col];
           }
        }
    }

    console.log(biggestNum);
}

