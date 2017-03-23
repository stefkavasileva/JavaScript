function printDeg(grad) {
   let diffDeg = 400 / 360;
    let convertedGradToDeg = Number(grad) / diffDeg;
    convertedGradToDeg = convertedGradToDeg % 360;

    if (convertedGradToDeg < 0) {
        convertedGradToDeg += 360;
    }
    console.log(convertedGradToDeg)
}
