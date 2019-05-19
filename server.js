const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


app.use( express.static( './dist' ));

app.get("/sw.js", (req, res) => {
    // res.writeHead(201, {
    //     'Content-Type': 'application/javascript'
    // });
    console.dir( path.resolve(__dirname, 'src', "sw.js") );
    res.sendFile(path.resolve(__dirname, 'src', "sw.js"));
  });

app.get('*', (req,res) => {

    console.log('hit');
    fs.createReadStream('./dist/index.html').pipe(res);
});

app.listen(3200);