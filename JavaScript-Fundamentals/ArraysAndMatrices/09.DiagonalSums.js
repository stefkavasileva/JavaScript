function main(input) {
    let sumPrimaryDiagonal=0;
    let sumSecondaryDiagonal=0;
    for (let row = 0; row < input.length; row++) {
      let currentRow=input[row].split(' ').map(Number);
        for (let col = 0; col < currentRow.length; col++) {
            if(row==col){
                sumPrimaryDiagonal+=currentRow[col];
            }
            if(col+row==input.length-1){
                sumSecondaryDiagonal+=currentRow[col];
            }
        }

    }

    console.log(`${sumPrimaryDiagonal} ${sumSecondaryDiagonal}`);
}
