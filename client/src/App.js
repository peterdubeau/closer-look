import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
// import Home from './screens/Home/Home'
// import User from './screens/User/User'
// import logo from './logo.svg';
import LoginSignUp from './screens/LoginSignUp/LoginSignUp'

function App() {
  return (
    <div className="app">
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
      </Switch> */}
      <Route path='/'>
        <LoginSignUp />
      </Route>

    </div>
  );
}
export default App;
