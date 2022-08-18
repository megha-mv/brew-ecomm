import './App.css';
import React  from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Product from './Pages/Product';
import SignIn from './Pages/SignIn';


function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
         <Routes>
            {/* Here you can pass the data to child Components */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
