const mongoose = require ('mongoose')
const schema=mongoose.Schema


const userschema= new schema({

name:{
    type:String,
    required:true
},
phone:{
    type:Number,

},

adress:{
    type:String
}


})

const user=mongoose.model('client',userschema)
module.exports=user

