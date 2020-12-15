import React from "react";
import "./styles.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
export default function App() {
const Home=()=> <h1>This is Home Page</h1>  
  
  return (
    <Router>
<Nav/>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/about" exact component={About}/>
<Route path="/shop" exact component={Shop}/>
  </Switch>
    </Router>
    
  );
}
