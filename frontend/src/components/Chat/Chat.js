import React,{useState, useEffect} from 'react'
import {Form,Button,Container,Row,Col,Jumbotron} from 'react-bootstrap'
import queryString from 'query-string'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'

class Chat extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            name:'',
            userMapping:{},
            err:''
        }
    }
    
   

    componentDidMount=()=>{
        axios.get('http://localhost:5000/db/getAll')  
        .then((res)=>{
            this.setState({
                userMapping:res['data']
            })
          
        })
        .catch((err)=>console.log(err))
    }


     render(){


        let showAllUser=()=>this.state.userMapping && Object.entries(this.state.userMapping).map((item,index)=>{
                 return(
                    <div>  <Button className="btn" color="primary" size="lg"> <p>{item[1][1]}</p>   </Button> <br></br>     </div>   
                 )
        })
        

           return(

            <div>
               <Jumbotron>
                  <p>WELCOME TO THE CHAT APPLICATION {this.state.name}</p>

               </Jumbotron>
                
             <Container>
                 <Row>
                     <Col>
                         {showAllUser()}
                     </Col>
                     <Col>
                        


                     </Col>

                 </Row>


             </Container>
            
            </div>

           )

     }

}




export default Chat;

