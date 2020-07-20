import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
// import Home from './screens/Home/Home'
// import User from './screens/User/User'
// import logo from './logo.svg';
import LoginSignUp from './screens/LoginSignUp/LoginSignUp'
import UserCreate from './components/UserCreate/UserCreate';
import UserEdit from './components/UserEdit/UserEdit'
import User from './screens/User/User'

function App() {
  return (
    <div className="app">
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
      </Switch> */}
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
