import { Link, Outlet } from "react-router-dom"
import "./Layoutpage.css"
import logo from "../../public/assets/Frame 168.png"
import cardLogo from "../../public/assets/Vector.png"
function Layoutpage (){
  
return(
    <>

    <nav>
      <div id="navdiv">
      <div>
        <img src={logo}></img>
      </div>
      <div id="namePagesdiv">
        <ul>
        <li>
            <Link to="/Homepage">Home</Link>
          </li>
          <li>
            <Link to="/Shoppage">Shop</Link>
          </li>
          <li>
            <Link to="/Contactpage">Contact</Link>
          </li>
          
          
        </ul>
        </div>
        
<div>
<img src={cardLogo}></img>
   </div>      
        </div>
       
      </nav>

     
<Outlet></Outlet>

    </>
)
}
export default Layoutpage