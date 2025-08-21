 
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Products2 from './pages/Products2'
import axios from 'axios'
import Cart from './pages/Cart'
import ProductRouter from "./Component/ProductRouter";
import CategoryProduct from './pages/CategoryProduct '
import SingleProduct from './pages/SingleProduct '
   
function App() {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (postion) => {
        const { latitude, longitude } = postion.coords;
        try {
          const response = await axios.get( ` https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
          console.log(response.data);
          const data = response.data;

          setLocation({
            county: data?.address?.county || "Unkonwn Country",
            state: data?.address?.state || "Unkonwn State",
          });
        } catch (error) {
          alert("Failed to get location");
          console.error("Error Fetching location", error);
        }
      },
      (error) => {
        alert("Failed to get location unvlid location");
        console.error("Error Fetching location", error);
      }
    );
  };
  return (
    <>
    <BrowserRouter>
     <Navbar
          location={location}
          getLocation={getLocation}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
     /> 
       
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/Products' element={<Products/>}/>
        <Route path='/products2' element={<Products2/>}/>
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/products2/:id" element={<SingleProduct/>}/>
        <Route
            path="/cart"
            element={
              <ProductRouter>
                <Cart loaction={location} getLocation={getLocation} />
              </ProductRouter>
            }
          ></Route>

      </Routes>
     <Footer/>
    </BrowserRouter>
     
 
    </>
  )
}

export default App
