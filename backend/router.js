const express=require('express')
const router=express.Router();


const {userMapping,addUser,loginUser,receiveMessage,checkRoom}=require('./db')



router.get('/',async(req,res)=>{
    res.send(users)

})

router.post('/register',async(req,res)=>{
    const name=req.body.name
    const username=req.body.username
    const useremail=req.body.useremail
    const password=req.body.password

    const response=addUser({name,username,useremail,password})

    res.send(response)
})


router.post('/login',async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const response=loginUser({username,password})
    
    res.send(response)
})






router.post('/Message',async(req,res)=>{
    const sender = req.body.user1
    const receiver = req.body.user2
    const message = req.body.message1
  
   const response=receiveMessage({sender,receiver,message})
    
   res.send(response)
})


router.get('/getAll',async(req,res)=>{
    res.send(userMapping)
})


router.post('/roomExist',async(req,res)=>{
    const sender=req.body.sender
    const receiver=req.body.receiver
    
    const response=checkRoom({sender,receiver})

    res.send(response)
})


module.exports=router;
