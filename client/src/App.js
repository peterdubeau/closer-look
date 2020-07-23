import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import UserEdit from './components/UserEdit/UserEdit'
import User from './screens/User/User'
import SearchResults from './screens/SearchResults/SearchResults'
import ProductDetails from './screens/ProductDetails/ProductDetails'
import Home from './screens/Home/Home'
import LoginSignUp from './screens/LoginSignUp/LoginSignUp'
import AllProducts from './screens/AllProducts/AllProducts'
// import ProductCards from './components/ProductCards/ProductCards';


function App() {
  return (
    <div className="app">
      <Route path='/login' exact>
        <LoginSignUp />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route> 
      <Route path='/users/:id'>
        <UserEdit component={User}/>
      </Route>
      <Route path='/products/search/:type' exact>
        <SearchResults />
      </Route>
      <Route path='/products/detail/:id'>
        <ProductDetails />
      </Route>
      <Route path='/products' exact>
        <AllProducts />
      </Route>
      
    </div>
  );
}
export default App;
