
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from"./Pages/Homepage"
import Shoppage from "./Pages/Shoppage"
import Contactpage from "./Pages/Contactpage"

import './App.css'
import Layoutpage from "./Pages/Layoutpage";

function App() {
  

  return (
    <div id="main">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layoutpage/>}>
    <Route path="/Layoutpage" element={<Layoutpage/>}></Route>
    <Route path="Homepage"element={<Homepage/>}></Route>
    <Route path="/Shoppage/:id" element={<Shoppage/>}></Route>
    <Route path="Contactpage" element={<Contactpage/>}></Route>
    
    </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
