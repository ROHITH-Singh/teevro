import React ,{useState,useEffect} from "react";
import fire from './fire';
const Login = (props) => {
    
      
    const { 
          email,
         setEmail, 
         password, 
         setPassword, 
         handleLogin,
          handlesignup, 
          hasAccount, 
          setHaveaccount,
           emailError, 
           passwordError }
        = props;
    return (

        <section className="login">
            <div className="loginContainer">
                <label >Username</label>
                <input type="text" autoFocus required value={email} onChange={e => {setEmail(e.target.value)}} />
                <p className="errorMsg">{emailError}</p>
                <label >Password</label>
                <input type="text" autoFocus required value={password} onChange={e => {setPassword(e.target.value)}} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? 
                    (<>
                    <button onClick={handleLogin}>Signin</button>
                     <p>Dont have an account ? <span onClick={() => {setHaveaccount(!hasAccount)}}>Signup</span> </p>
                     </>
                     ) : (
                     <>
                     <button onClick={handlesignup}>SignUp </button>
                      <p>have an account ? <span onClick={() => {setHaveaccount(!hasAccount)}}>Signin</span> </p>
                      </>)}
                </div>

            </div>
        </section>
    );
}
export default Login;