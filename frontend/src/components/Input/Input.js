import React from 'react';
import {Card,Button,Form,Label,FormGroup,Input,Jumbotron} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import qs from 'qs'


class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:'',
            message:''
        }
    }
   
   
   checkIndex=(sender,receiver)=>{
     const user1=sender
     const user2=receiver 

    axios({method:'post',url:'http://localhost:5000/db/roomExist',data:qs.stringify({sender,receiver}),headers:{ 'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}})
    .then((res)=> {
        this.setState({
            index:res['data']['val']
        })

    })
    .catch((err)=>console.log(err))
   }


   changeMessage=(event)=>{
       this.setState({
           [event.target.name]:event.target.value
       })
   }


   render(){
      const {sender,receiver}=this.props

    return(

            <div>
                <Jumbotron>
                    <p>WELCOME <b>{sender}</b></p>
                     <p>YOU AND {receiver} are connecting</p>
                </Jumbotron>
                
                {this.state.index===-1 ? this.checkIndex(sender,receiver) : ''}
                <Card>
                   

                    <Form onSubmit={this.sendMessage}>
                        <FormGroup>
                            <Label for="message" >MESSAGE</Label>
                            <Input value={this.state.message} name="message" placeholder="Enter a Message to send to {receiver}" onChange={this.changeMessage} />
                        </FormGroup>

                        <Button >SEND MESSAGE</Button>

                    </Form>



                </Card>
        
             </div>     

        )
    }

}


  
export default Message;
