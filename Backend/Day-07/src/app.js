const express = require('express');
const noteModel = require('./models/notes.model')

const app = express();
app.use(express.json())

app.post('/note', async (req,res)=>{
    const { name, course, college } = req.body

    const note = await noteModel.create({
        name, 
        course,
        college
    })

    res.status(201).json({
        message : 'Notes Created!',
        note
    })

})


app.get('/note', async (req,res)=>{
    const note = await noteModel.find();

    res.status(200).json({
        message: 'Read Notes',
        note
    })

})











module.exports = app