import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./contact.css"
import Srujan from "./images/Srujan.png"
import anusj from "./images/anusj.jpg"



const Contact =()=>{

  
  
  
    
    return(
        <div>
            <Navbar/>
            
            
<hr/>
<div class="terms1">

    <table >
    <h1 class= "ls">Developed By...</h1>
      <tr>
        <td>
          <ul>
             
             <img src={anusj}  className="pl" />
             <li class="lb">SRUJAN KUMAR MARAPAKA.</li>
             <li class="lb">9885580745.</li>
             <li class="lb">srujananu3921@gmail.com</li>
             <li class="lb">MERN Stack Developer</li>
          </ul>
        </td>

      </tr>
    </table>
        
        </div>
    
        <br />
        <br />

        <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}

export default Contact