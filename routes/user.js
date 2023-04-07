const express=require('express')

const userrouter=express.Router()

const user = require('../models/user')

//add user

userrouter.post('/add',async(req,res)=>{

    try {

        let addedUser= new user(req.body)
        let savedUser= await addedUser.save()
        res.send({user:savedUser, msg:"user is saved"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})
//get all
userrouter.get('/all',async(req,res)=>{

    try {

        let allUser= await user.find()
        res.send({allUsers:allUser, msg:"all usres are here"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})



//get user by id
userrouter.get('/:id',async(req,res)=>{

    try {

        let userById= await user.findById({_id:req.params.id})
        res.send({Userbyid:userById, msg:" usre is here"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})


//delete user by id
userrouter.delete('/:id',async(req,res)=>{

    try {

        let deleteById= await user.findByIdAndDelete({_id:req.params.id})
        res.send({deletedById:deleteById, msg:"user is deleted"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})
//update


userrouter.put('/:id',async(req,res)=>{

    try {

        let updateById= await user.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.send({updatedById:updateById, msg:"user is updated"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})


module.exports=userrouter