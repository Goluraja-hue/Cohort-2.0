const express = require('express')


const app = express()
app.use(express.json())

const notes = []

app.get('/',(req,res)=>{
    res.send('hello world!')
})


/**
 * POST /notes
 */
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    
    res.status(200).json({
        message:'Notes Created!'
    })
})


/**
 * GET /notes
 */
app.get('/notes',(req,res)=>{
    res.send(notes)

    // res.status(200).json({
    //     message:'Notes Fetched!'
    // })
})


/**
 * DELETE /notes/:id
 */
app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id]

    res.status(204).json({
        message:'Notes Deleted!'
    })
})


/**
 * PATCH /notes/:id
 */
app.patch('/notes/:id',(req,res)=>{
    notes[req.params.id].title = req.body.title

    res.status(201).json({
        message:'Notes Updated!'
    })
})

module.exports = app