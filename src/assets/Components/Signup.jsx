
import "../Styles/Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
    return ( 
        <>
         <div className="form-container">
                <div className="formdtl">
                    <div className="write">
                     <h5>Bluebaycreaters</h5>
                     <h1>Register you account</h1>

                     <p>Email</p>

                     <div className="input-box">
                     <input type="email"  placeholder="pleace enter your email" id="email"/>
                    </div>
                    
                    <p>Password</p>
                    <div className="input-box">
                    <input type="password"  placeholder="pleace enter your password" id="password"/>
                    </div>
                    <p>Comfirm password</p>
                    <div className="input-box">

                    <input type="comferm your password" placeholder="pleace enter your" id="password"/>
                    </div>

                    <div className="bp">
                    <button className="btn"></button>
                    <p>Hey!! this is absolutely free and for you</p>
                    </div>
                     {/* <div className="reg"><Link to="Signin">Signin</Link></div> */}
                     <Link to="Signin">Signin</Link>
                 </div>
                </div>

                <div className="form-img"><p>Hey, you can take this<br/> Screen UI,Css,Swift and Android code for free </p>
                </div>
                </div>
        
        
        </>
     );
}
 
export default Signup;