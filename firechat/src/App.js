import React from 'react';
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {auth} from './fire.js';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {

const [user] = useAuthState(auth)

  return (
   <div className="App">
     { user ? <Chat /> : <SignIn />  }
 
   </div>
  );
}

export default App;
