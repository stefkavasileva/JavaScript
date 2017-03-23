function checkPoint([x1,y1,x2,y2]) {
    //80/100
    [x1,y1,x2,y2].map(Number);
    function isValidDistance(x1,y1 ,x2,y2) {
        let isEquals=false;
        let arr=[x1,y1,x2,y2];
        for (let i = 0; i <2; i++) {
          for(let j=2;j<=3;j++){
              if(arr[i]==arr[j]){
                  isEquals=true;
              }
          }
        }

       return isEquals;
    }

    let isValidFirstDistance=isValidDistance(x1,y1,0,0);
    if (isValidFirstDistance){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    let  isValidSecondDistance=isValidDistance(x2,y2,0,0);

    if (isValidSecondDistance){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    let isValidThirdDistance=isValidDistance(x1,y1,x2,y2);

    if (isValidThirdDistance){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}

