const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo description"
    }
    res.send(photo);
});

port = 3000;

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda başlatıldı.`);
});
