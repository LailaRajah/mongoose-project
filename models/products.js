const mongoose = require ('mongoose')
const schema=mongoose.Schema


const productschema= new schema({

name:{
    type:String,
    required:true
},
price:{
    type:Number,

}



})

const product=mongoose.model('products',productschema)
module.exports=product
