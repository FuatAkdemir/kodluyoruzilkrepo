
const fs = require('fs');

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', 'utf8',  err => {
    if(err) console.log("Yazdırma Hatası: ", err);    
    else console.log("Yazdırıldı.");
});

fs.readFile("employees.json", "utf8", (err, data)=>{
    if(err) console.log("Okuma Hatası: ", err);
    console.log("Okunan veri: ", data);
});

fs.appendFile("employees.json", ',\n{"name": "emp 2", "salary": 5000}', 'utf8', (err)=>{
    if(err) console.log("Güncelleme Hatası: ", err);
    else console.log("Güncellendi.");
});

setTimeout(function(){
    fs.unlink('employees.json', (err) => {
        if (err) console.log("Silme Hatası: ", err);
        else console.log("Silindi.");
    });
}, 5000);
