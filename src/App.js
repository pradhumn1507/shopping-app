import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Home} from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
import Products from "./components/Products"
import Signup from "./components/Signup"


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path='/' element='{<Home/>}'/>
   <Route path='/login' element='{Login}'/>
   <Route path='/signup' element='{Signup}'/>
   <Route path='/navbar' element='{Navbar}'/>
   <Route path='/Products' element='{Products}'/>
    <Route  element='{NotFound}'/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
