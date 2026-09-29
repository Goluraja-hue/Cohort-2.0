const express = require('express');

const app =  express();
app.use(express.json())

const notes = [];

/**
 * POST
 */
app.post('/notes',(req,res)=>{

    notes.push(req.body);

    res.status(200).json({
        message : ' Notes Created!'
    })
})

/**
 * GET
 */
app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes : notes
    })
})

/**
 * DELETE  /notes/:id
 */
app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id]

    res.status(204).json({
        message : 'Notes Deleted'
    })
})

/**
 * PATCH  /notes/:id
 */
app.patch('/notes/:id',(req,res)=>{
    notes[req.params.id].University = req.body.University

    res.status(200).json({
        message : 'Notes Updated'
    })
})






































































module.exports =  app;
