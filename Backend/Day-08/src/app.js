const express = require('express');
const infoModel = require('./models/info.model')

const app = express();
app.use(express.json())



/**
 * POST /info
 */
app.post('/info',async (req,res)=>{
    const {name, course, college} = req.body

   const info = await infoModel.create({
        name,
        course,
        college
    })

    res.status(201).json({
        message : 'Information Created!',
        info
    })

})


/**
 * GET /info
 */
app.get('/info', async (req,res)=>{
    const info = await infoModel.find()

    res.status(200).json({
        message : 'Fetched Data!',
        info
    })

})


/**
 * DELETE /info/:id
 */
app.delete('/info/:id', async (req,res)=>{
    const id = req.params.id

    const info = await infoModel.findByIdAndDelete(id)

    res.status(200).json({
        message : 'Info Deleted!',
        info
    })
})


/**
 * PATCH //info/:id
 */
app.patch('/info/:id', async (req,res)=>{
     const id = req.params.id

     const {name, course, college} = req.body

     const info = await infoModel.findByIdAndUpdate(id, {name, course, college})

     res.status(201).json({
        message : 'Info Updated',
     })

})

module.exports = app