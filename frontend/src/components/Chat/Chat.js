import React from 'react'
import {Form,Button,Container,Row,Col,Jumbotron} from 'react-bootstrap'
import queryString from 'query-string'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'
import Message from '../Input/Input'







class Chat extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            usernamesender:'',
            userreceiver:'',
            name:'',
            userMapping:[],
            
        }
    }
    
  


    componentDidMount=()=>{
      

        axios.get('http://localhost:5000/db/getAll')  
        .then((res)=>{
            this.setState({
                userMapping:res['data'],
                usernamesender:localStorage.getItem('username')
            })         
        })
        .catch((err)=>console.log(err))
    }



    logoutUser=()=>{
        localStorage.clear()
        this.setState({
            username:''
        })
        window.location.href='/'
    }


    setReceiver=(event,index)=>{
        event.preventDefault() 
        
        const val=this.state.userMapping[index][0]
          this.setState({
            userreceiver:val
          })   
    }


     render(){


        let showAllUser=()=>this.state.userMapping && Object.entries(this.state.userMapping).map((item,index)=>{
            if(this.state.usernamesender!=(item[1][0]))
            {
            return(
               
                <div key={item.id}><Button onClick={(event)=>this.setReceiver(event,index)} className="btn" color="primary" size="lg"> <p>{item[1][1]}</p> </Button> <br></br>     </div>   
            )
            }
        })


        if(localStorage.getItem('username')===null){
            return(
                <div>ACCESS DENIED</div>
            )
        }
        else{

           return(

        <div>
            
                
            <Jumbotron>
                  <p>WELCOME TO THE CHAT APPLICATION {this.state.name}</p>
                  <Button onClick={this.logoutUser}>LOGOUT</Button>
            </Jumbotron>
                
            <Container>
                <Row>
                    <Col>
                        {showAllUser()}
                    </Col>
                    <Col>
                        
                        {this.state.receiver!=''?  <Message sender={this.state.usernamesender} receiver={this.state.userreceiver} ></Message> : ''}    
                        
                    </Col>
                </Row>

            </Container>
        </div>

           )
        }
    }
}


export default Chat;
