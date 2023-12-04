import "../Styles/Signin.css"
import { Link } from "react-router-dom";

const Signin = () => {
    return ( 

        <>
          <div className="form-container">
                <div className="formdtl">
                    <div className="write">
                     <h5>Bluebaycreaters</h5>
                     <h1>Signin</h1>
                     <h2>thi is why i told you</h2>

                     <p>Email</p>

                     <div className="input-box">
                     <input type="email"  placeholder="pleace enter your email" id="email"/>
                    </div>
                    
                    <p>Password</p>
                    <div className="input-box">
                    <input type="password"  placeholder="pleace enter your password" id="password"/>
                    </div>
                    <div className="bp">
                    <button className="btn">submit</button>
    
                    {/* <p>Hey!! this is absolutely free for you</p> */}
                    </div>
                 </div>
                </div>

                <div className="form-img"><p>Hey, you can take this<br/> Screen UI,Css,Swift and Android code for free </p>
                </div>
                </div>
        
        </>
     );
}
 
export default Signin;