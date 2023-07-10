import React from'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './component/home'
import Menu from './component/Menu'
import About from './component/About'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './component/navbar'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/Menu" element={<Menu></Menu>}></Route>
  </Routes>
  
  </BrowserRouter>

    </div>
  )
}
export default App