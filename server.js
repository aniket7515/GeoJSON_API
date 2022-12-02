const path=require('path')
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const connectDB= require('./config/db')

// load env variabales
dotenv.config({path:'./config/config.env'})
// connect ot database
connectDB();


const app= express();

// Body parser
app.use(express.json())

// Enable corss
app.use(cors())

// set static folder
app.use(express.static(path.join(__dirname,'public')))

// ROutes
app.use('/api/v1/stores',require('./routes/stores'))




const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server running in ${process.env.Node_ENV} mode on port ${PORT}`) )
