const express = require('express');
const path = require('path');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.static(path.join('public')));
//  app.use(express.static(path.join('static','public')));
app.use('/static', express.static(path.join(__dirname, './static/public')))

// getting the get request 
app.get('/',(req,res)=>{
    res.send('this is a get request');
})

app.post('/',(req,res)=>{
    res.send('this is a post request');
});

app.put('/', (req, res)=>{
    res.send('this is a put request');
})

app.delete('/', (req, res)=>{
    res.send('this a delete request');
})


// listening to the port
app.listen(port, ()=>{
    console.log('App listen on port ' + port);
});