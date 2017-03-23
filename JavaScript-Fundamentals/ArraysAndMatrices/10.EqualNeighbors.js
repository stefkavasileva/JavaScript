function main(input) {
    let matrix=[];
    for (let row = 0; row < input.length; row++) {
      matrix[row]=input[row].split(' ');
    }

    let equalsNeighboursNums=0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(col-1>=0){
                if(matrix[row][col]==matrix[row][col-1]){
                    equalsNeighboursNums++;
                }
            }
            if(col+1<matrix.length){
                if(matrix[row][col]==matrix[row][col+1]){
                    equalsNeighboursNums++;
                }
            }
            if(row+1<matrix.length){
                if(matrix[row][col]==matrix[row+1][col]){
                    equalsNeighboursNums++;
                }
            }
            if(row-1>=0){
                if(matrix[row][col]==matrix[row-1][col]){
                    equalsNeighboursNums++;
                }
            }
        }
    }

    console.log(equalsNeighboursNums/2);
    
}
