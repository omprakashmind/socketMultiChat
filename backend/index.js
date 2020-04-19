var express=require('express')
const http=require('http')
const socketio=require('socket.io')
var bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

const port=process.env.port || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


var server=http.createServer(app)


// const {sendMessage}=require('./db')

const io=socketio(server)








io.on('connection',(socket)=>{
   console.log('We have a new connection')


  
  



   socket.on('disconnect',()=>{
       console.log('Connection disconnected')
   })
})

const router=require('./router')

app.use('/db',router)


server.listen(port,()=>console.log('SERVER IS CURRENTLY RUNNING '))