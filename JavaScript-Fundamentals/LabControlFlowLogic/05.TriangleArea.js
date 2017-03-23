function calcTriangleAre([firstSide,secondSide,thirdSide]) {
    firstSide=Number(firstSide);
    secondSide=Number(secondSide);
    thirdSide=Number(thirdSide);
    let semiperimeter=(firstSide+secondSide+thirdSide)/2;
    let area=Math.sqrt(semiperimeter*
        (semiperimeter-firstSide)*
        (semiperimeter-secondSide)*
        (semiperimeter-thirdSide));

    console.log(area)
}

