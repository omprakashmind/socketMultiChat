import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Chat from './components/Chat/Chat'



class App extends React.Component{

   render(){
 
       return(
           <Router>
               <Switch>
                   <Route path="/" exact component={Login}/>
                   <Route path="/register" component={Register}/>
                   <Route path="/chat" component={Chat}/>
               </Switch>
           </Router>
       )

   }

}


export default App;
