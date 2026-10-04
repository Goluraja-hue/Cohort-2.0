const express = require('express');
const infoModel = require('./models/info.model')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


/**
 * - POST /api/info
 * - create new information and save data in database 
 * - req.body = {Name, Course, College, Pincode, City}
 */
app.post('/api/info',async (req,res)=>{
    const {Name, Course, College, Pincode, City } = req.body


    const info = await infoModel.create({
        Name,
        Course,
        College,
        Pincode,
        City
    })


    res.status(201).json({
        message : 'Information Created!',
        info
    })


})


/**
 * - GET /api/info
 * - To read database information data 
 */
app.get('/api/info',async (req,res)=>{
    const info = await infoModel.find();

    res.status(200).json({
        message : 'Infromation Read!',
        info
    })
})


/**
 * - DELETE /api/info/:id
 * - to delete database data from id 
 */
app.delete('/api/info/:id',async (req,res)=>{
    const id = req.params.id

    const info =  await infoModel.findByIdAndDelete(id)

    res.status(201).json({
        message : 'Information Deleted!'
    })
})


/**
 * - Patch /api/info/:id 
 * - to upadate Database Data
 * - {Name, Course, College, Pincode, City} = req.body
 */
app.patch('/api/info/:id', async (req,res)=>{
    const id = req.params.id
    const {Name, Course, College, Pincode, City} = req.body

    const info = await infoModel.findByIdAndUpdate(id, {Name, Course, College, Pincode, City})

    res.status(200).json({
        message : 'Information Updated!'
    })

})






















































































module.exports = app 