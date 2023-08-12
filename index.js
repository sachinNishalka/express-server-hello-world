const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// getting the get request 
app.get('/',(req,res)=>{
    res.send('hello world');
})

// listening to the port
app.listen(port, ()=>{
    console.log('App listen on port ' + port);
})