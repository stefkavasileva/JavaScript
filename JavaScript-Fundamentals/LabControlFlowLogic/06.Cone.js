function calcVolumeAndAreaOfCone([radius,height]) {
    height=Number(height);
    radius=Number(radius);
    let volume=(1/3)*Math.PI*(radius*radius)*height;
    let slantHeight=Math.sqrt((radius*radius)+(height*height));
    let lateral=Math.PI*radius*slantHeight;
    let base=Math.PI*radius*radius;
    let totalArea=lateral+base;
    console.log("volume = "+volume);
    console.log("area = "+totalArea);
}
