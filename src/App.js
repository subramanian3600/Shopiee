import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Cart';
import Cart from './components/Cart';
import Credits from './components/Credits';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/credits" component={Credits}></Route>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
