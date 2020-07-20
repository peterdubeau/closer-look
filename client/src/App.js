import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LoginSignUp from './screens/LoginSignUp/LoginSignUp'
import UserEdit from './components/UserEdit/UserEdit'
import User from './screens/User/User'

function App() {
  return (
    <div className="app">
      <Route path='/' exact>
        <LoginSignUp />
      </Route>
      <Route path='/api/users/:id'>
        <UserEdit component={User}/>
      </Route>

    </div>
  );
}
export default App;
