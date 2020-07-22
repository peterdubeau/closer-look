import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import UserEdit from './components/UserEdit/UserEdit'
import User from './screens/User/User'
import SearchResults from './screens/SearchResults/SearchResults'
import ProductDetails from './screens/ProductDetails/ProductDetails'
import Home from './screens/Home/Home'
import LoginSignUp from './screens/LoginSignUp/LoginSignUp'
// import ProductCards from './components/ProductCards/ProductCards';


function App() {
  return (
    <div className="app">
      <Route path='/api/login' exact>
        <LoginSignUp />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route> 
      <Route path='/api/users/:id'>
        <UserEdit component={User}/>
      </Route>
      <Route path='/api/products' exact>
        <SearchResults />
      </Route>
      <Route path='/api/products/:id'>
        <ProductDetails />
      </Route>
    </div>
  );
}
export default App;
