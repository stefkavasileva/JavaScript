function main([input]) {
    let regex=/[\s\.\(\)\;\,]/;
    let result=input.split(regex).map(x=>x.trim());
    result= result.filter(x=>x!="");
    console.log(result.join("\n"));
}
