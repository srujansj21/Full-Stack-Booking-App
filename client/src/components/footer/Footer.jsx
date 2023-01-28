import { faCopyright, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import Srujan from "./images/Srujan.png"
import "./footer.css"



const Footer=()=>{
    
    return(
        <div className="footer">
            <div className="fLists">
                <Link to="/help">
                <ul className="fList">
                    <li className="fListItem"><button>Help</button></li>
                </ul>
                </Link>
                <Link to="/about">
                <ul className="fList">
                    <li  className="fListItem"><button>About</button></li>
                </ul>
                </Link>
                <Link to="/terms">
                <ul className="fList">
                    <li  className="fListItem"><button>Terms&Conditions</button></li>
                </ul>
                </Link>
                <Link to="/contact">
                <ul className="fList">
                    <li  className="fListItem"><button>ContactUs</button></li>
                </ul>
                </Link>
            </div>
            <div className="fText">
                
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                
                <img className="logo1" src={Srujan} alt="" />
                
                
                </Link> <span className="sp123"> © Copyright 2023. All Rights Reserved. Srujan Marapaka,Inc.</span>
                <br />

            </div>

            
            <br />
            <br />
            
        </div>

    )
}
export default Footer