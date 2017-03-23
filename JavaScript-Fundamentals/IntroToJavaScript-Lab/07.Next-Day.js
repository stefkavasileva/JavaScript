function getNextDay(inputArr) {
    let date=new Date(Number(inputArr[0]),Number(inputArr[1])-1,Number(inputArr[2]));
    let oneDay=24*60*1000;
    let nextDay=new Date(date.getTime()+oneDay);

    console.log(nextDay.getFullYear()+"-"+(nextDay.getMonth()+1)+"-"+(nextDay.getDate()));

}

