import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import dashbordadmin from "./components/dashbordadmin"

import Connexion from "./components/signup"
import SignupPage from "./components/signin"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/home';
import dashborduser from './components/dashborduser';

function App() {
  return (
    <Provider store={store}>
        <Router>
      <div className="App">
         
      
        
      <div className='container'>
        
        <Switch>
        <Route exact path="/" component ={Home} />
        <Route path="/product" component ={dashbordadmin}  />
        <Route path='/client' component ={dashborduser}  >
        </Route>
        <Route exact path="/connx"   component={Connexion} />        
        <Route  exact path="/inscrit" component ={SignupPage} />
        </Switch>
        
      </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
