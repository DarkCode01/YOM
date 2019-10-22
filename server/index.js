const express= require('express');
const app = express();
const cors= require('cors');
const bodyParser=require('body-parser');

const port= process.env.PORT||3000;

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port,(err)=>{
    if(err){
        throw err;
    }else{
        console.log('Server on port',port);
    }
})