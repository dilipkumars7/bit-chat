import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import About from "./About";
import Header from './Header';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{user},dispatch]=useStateValue();
  return (
    //BEM
    <div className="app">
      {!user?(
        <Login />
        // <About/>
      ):(
        <div className="app__body">
       <Router>
       <Sidebar />
         <Switch>
           <Route path="/rooms/:roomId">
           <Chat />
          </Route>
         <Route exact path="/">
           <Chat/>
           </Route>
         </Switch>
       </Router>
      </div>
      )}
       
    </div>
  ); 
}

export default App;
