
let arg = process.argv.slice(2);

function daireninAlani(yaricap){
    let alan = Math.PI * yaricap * yaricap;
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
}

daireninAlani(arg[0] * 1);
