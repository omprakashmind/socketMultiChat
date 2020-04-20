import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Button,Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



const Register =()=>{
  const [name,setName]=React.useState('')
  const [userName,setUserName]=React.useState('')
  const [userEmail,setUserEmail]=React.useState('')
  const [userPassword,setUserPassword]=React.useState('')

 

    const setValues=(event)=>{
        event.preventDefault()
        
        axios.post('http://localhost:5000/db/register',{name,userName,userEmail,userPassword})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    }

     return(
         <Form onSubmit={setValues}>
             <FormText color="muted">
                 REGISTER NOW TO CHAT USER IN A WELL DEFINED CHAT APPLICATION
             </FormText>
             <FormGroup >
                 <Label for="Name">NAME</Label>
                 <Input type="name" name="name" placeholder="Enter your name" onChange={(event)=>setName(event.target.value)} required/>
             </FormGroup >
             <FormGroup >
                 <Label for="userName">USERNAME</Label>
                 <Input type="name" name="username" placeholder="Enter your username" onChange={(event)=>setUserName(event.target.value)} required/>
             </FormGroup >
             <FormGroup >
                 <Label for="email">USEREMAIL</Label>
                 <Input type="email" name="userEmail" placeholder="Enter your Email" onChange={(event)=>setUserEmail(event.target.value)} required/>
             </FormGroup>
             <FormGroup >
                 <Label for="password">PASSWORD</Label>
                 <Input type="password" name="userPassword" placeholder="Enter your Password" onChange={(event)=>setUserPassword(event.target.value)} required />
             </FormGroup>

             <Button>SUBMIT</Button>

         </Form>
     )
}

export default Register;
