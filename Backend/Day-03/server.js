const express = require ('express');

const app = express();
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

const notes = [];

app.post('/notes',(req,res)=>{
    // console.log(req.body)
    notes.push(req.body)
    res.send('Notes Created!');
})


app.get('/notes',(req,res)=>{
    res.send(notes)
})


app.listen(3000);
