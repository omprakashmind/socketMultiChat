const users=[]
const rooms=[]
const userMapping=[]


const addUser=({name,username,useremail,password})=>{
    
    const existingUser=users.find((user)=>user.useremail==useremail);
    const existUserName=users.find((user)=>user.username==username)

    if(existingUser) return {error:'EMAIL ID IS ALREADY REGISTERED'}

    if(existUserName) return {error:'PLEASE CHOOSE ANOTHER USERNAME'}

    const user={name,username,useremail,password}
    
    users.push(user);

    let arr=new Object
    arr[0]=username
    arr[1]=name

    userMapping.push(arr);
       
    return {status:200}
}

const loginUser=({username,password})=>{
   
   
   const userExist=users.find((user)=>user.username===username && user.password===password)

   if(userExist===undefined)
       return {status:404}
   else
       return {status:200};

}


const receiveMessage=({sender,receiver,message})=>{
    
    let index=rooms.findIndex((room)=>room.firstName===sender && room.secondName===receiver)
    let index1=rooms.findIndex((room)=>room.firstName===receiver && room.secondName===sender)
    let messageChat=[]
    
    if(index===-1 && index1===-1){
        let firstName=sender
        let secondName=receiver
        let messageRoom=[]
        let room={firstName,message}
        messageRoom.push(room)
        let chat={firstName,secondName,messageRoom}
        rooms.push(chat)
        messageChat.push(messageRoom)
    }
    else{
        const index3=index > -1 ? index : index1
        let firstName=sender
        let room={firstName,message}

        rooms[index3]['messageRoom'].push(room)
        messageChat=rooms[index3]['messageRoom']
    }
    return {messageChat}
}

const checkRoom=({sender,receiver})=>{
    let index=rooms.findIndex((room)=>room.firstName===sender && room.secondName===receiver)
    let index1=rooms.findIndex((room)=>room.firstName===receiver && room.secondName===sender)
    let val;
    if(index==-1)
      return {val:index1}
    return {val:index}    
} 





module.exports={addUser,loginUser,receiveMessage,userMapping,checkRoom}

