const http = require("http");

const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === "/"){
        res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
        res.write("<h2>Anasayfa</h2><br><p>"+`Anasayfaya hoş geldiniz.`+"</p>");
    }
    else if(url === "/hakkimda"){
        res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
        res.write("<h2>Hakkımda</h2><br><p>"+`${url} sayfasına hoş geldiniz.`+"</p>");
    }
    else if(url === "/iletisim"){
        res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
        res.write("<h2>İletişim</h2><br><p>"+`${url} sayfasına hoş geldiniz.`+"</p>");
    }
    else{
        res.writeHead(404, {"content-type": "text/html; charset=utf-8"});
        res.write("<h2>404 Sayfa Bulunamadı...</h2>");
    }

    res.end();

})

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});