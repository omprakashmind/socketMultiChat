import React from 'react';
import { Card, Button, Form, Label, FormGroup, Input, Jumbotron } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import qs from 'qs'


let socket
class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: -1,
            message: '',
            messages: []
        }
    }


    checkIndex = (sender, receiver) => {
        axios({ method: 'post', url: 'http://localhost:5000/db/roomExist', data: qs.stringify({ sender, receiver }), headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } })
            .then((res) => {
                this.setState({
                    index: res['data']['val']
                })

            })
            .catch((err) => console.log(err))
    }


    changeMessage = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    sendMessage = (event,sender,receiver) => {
        event.preventDefault()
            const message=this.state.message
            
            axios({method:'post',url:'http://localhost:5000/db/Message',data:qs.stringify({user1:sender,user2:receiver,message1:message}),headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'}})  
            .then((res)=>{ 
                  this.setState({
                      messages:res['data']['messageChat'] 
                    })
              })
            .catch((err)=>console.log(err))
    }
    


    render() {
        const { sender, receiver } = this.props

        const displayMessages = this.state.messages && this.state.messages.map((item,index) => {
              return(
                  
                <div key={item.id}><p>{item['firstName']}</p>{item['message']} </div>
                
              )
        })


        return (

            <div>
                <Jumbotron>
                    <p>WELCOME <b>{sender}</b></p>
                    <p>YOU AND {receiver} are connecting</p>
                </Jumbotron>

                {this.state.index === -1 ? this.checkIndex(sender, receiver) : ''}
                <Card>
                    {displayMessages}



                    <Form >
                        <FormGroup>
                            <Label for="message" >MESSAGE</Label>
                               <Input value={this.state.message} name="message" placeholder="Enter a Message to send to {receiver}" onChange={this.changeMessage} />
                         </FormGroup>

                        <Button onClick={(event)=>this.sendMessage(event,sender,receiver)} >SEND MESSAGE</Button>
                    </Form>
                </Card>

            </div>

        )
    }
}



export default Message;
