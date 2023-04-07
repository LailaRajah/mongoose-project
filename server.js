const express =require ('express')

const connectdb=require('./config/connectdb')
require('dotenv').config()
connectdb()

//initialisation du serveur
const app= express()

app.use(express.json())

//création d'un middelware specifique '/user' d'après "./routes/user"
app.use('/user',require('./routes/user'))






app.listen(process.env.PORT,(err)=>err?console.log(err):console.log(`server is running on port ${process.env.PORT}`))