function calcArea(inputLine) {
    inputLine=inputLine.map(Number);
    let area=(inputLine[0]*inputLine[1])+(inputLine[2]*inputLine[3]);
    area-=Math.min(inputLine[0],inputLine[2])*Math.min(inputLine[1],inputLine[3]);

    console.log(area);
}
