function main(input) {
    let matrix=[];
    for (let row = 0; row < input.length; row++) {
        matrix[row]=input[row].split(' ').map(Number);
    }

    let magicSum=0;
    let isMagicMatrix=true;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum=0;
        let colSum=0;
        for (let col = 0; col < matrix.length; col++) {
            rowSum+=matrix[row][col];
            colSum+=matrix[col][row];
        }

        if(magicSum!=rowSum && row>0){
            isMagicMatrix=false;
            break;
        }

        if(magicSum!=colSum && row>0){
            isMagicMatrix=false;
            break;
        }
        magicSum=rowSum;

    }
        console.log(isMagicMatrix)
}