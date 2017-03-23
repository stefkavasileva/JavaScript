function calcNeededBoxes([bottlesCount,fitsBottles]) {
    bottlesCount=Number(bottlesCount);
    fitsBottles=Number(fitsBottles);
    let neededBoxes=Math.ceil(bottlesCount/fitsBottles);
    console.log(neededBoxes);
}
