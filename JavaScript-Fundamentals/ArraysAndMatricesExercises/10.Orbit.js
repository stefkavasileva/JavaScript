function main(inputArr) {
    let matrixDimensions=inputArr[0].split(' ').map(Number);
    let rows=matrixDimensions[0];
    let cols=matrixDimensions[1];
    let cellCoordinates=inputArr[1].split(' ').map(Number);
    let x=cellCoordinates[1];
    let y=cellCoordinates[0];
    let matrix=[];

    for (let row = 0; row < rows; row++) {
        matrix[row]=[cols];
        for (let col = 0; col < cols; col++) {
            matrix[row][col]=0;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
                matrix[row][col] = Math.max(Math.abs(y - row),Math.abs(x - col)) + 1;

        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));

    }
}