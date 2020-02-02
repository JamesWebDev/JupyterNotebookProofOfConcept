const express = require('express');
var path = require('path');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'))
});
app.use('/public', express.static('public'));
app.get('/HelloExpress', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))