const express = require('express');
const app=express();
const port=4000;

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

app.use(express.json())

app.listen(4000,()=>{
    console.log(`server started at ${4000}`)
})


const mongoose = require('mongoose')
mongoose.connect(mongoString,{useNewUrlParser: true , useUnifiedTopology : true})


const db=mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


//Post Method
app.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
app.get('/getAll', (req, res) => {
    res.send('Get All API')
})

// //Get by ID Method
// app.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

// //Update by ID Method
// app.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// app.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })