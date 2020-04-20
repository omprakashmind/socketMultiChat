import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import qs from 'qs'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';



const Login=()=>{ 

    const [username,setUsername]=React.useState('')
    const [password,setPassword]=React.useState('')

   const registrationPage=(event)=>{
       event.preventDefault()
       window.location.href='/register'
   }

   const loginPage=(event)=>{
      event.preventDefault()
    if(username!=null && password!=null)
    {
        axios({method:'post',url:'http://localhost:5000/db/login',data:qs.stringify({username:username,password:password}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        
    }

   }



    return(
        <div className="outerClassContainer">
            <div className="innerClassContainer">
                <h1 className="heading">LOGIN</h1>

                <div><input placeholder="USERNAME" className="joinInput" type="text" onChange={(event)=>setUsername(event.target.value) } /></div>
                <div><input placeholder="PASSSWORD" className="joinPassword" type="password" onChange={(event)=>setPassword(event.target.value)} /></div>

                {/* <Link onClick={event=>(!username || !password)? event.preventDefault():null} to={`/chat?username=${username}&password=${password}`} >
                   <Button outline color="secondary" size="lg" className="button mt-20" type="submit">LOG IN</Button>
                </Link> */}

                <Link onClick={loginPage}>
                   <Button outline color="secondary" size="lg" className="button mt-20" type="submit">LOG IN</Button>
                </Link>

              <Link onClick={registrationPage}>
                 <Button outline color="secondary" size="lg" className="button mt-20" type="submit">SIGN IN</Button>
              </Link> 
              

            </div>
        </div>
    )
}




export default Login;

