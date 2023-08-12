const express = require('express');
const app = express();
const port = 3000;
// this is a middleware
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send(
        {
            "id":'sachin',
            "logo":'😊'
        }
    );
});

app.post('/user/:id',(req,res)=>{
    // id is taken through the url parameter
    const {id} = req.params;
    // logo is taken through the body
    const {logo} = req.body;

    // checking wheather we have a logo in the request body
    if(!(logo)){
        res.status(418).send({
            "message":'We need a logo'
        });
    }
    res.send(
        
            {
                "User": `This is the user ${id} with logo ${logo}`
            }
        
    )

});

app.listen(3000,()=>{
    console.log(`App is listening in port ${port}`);
})