
import './App.css';
import React,{useState,useEffect} from 'react';
import fire from './fire';
import Login from './login';
import Hero from './hero';
function App() {
  var gmail = "";
  var [user ,setUser] = useState("");
  var [email , setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError , setEmailerror] = useState("");
  const [passwordError, setPassworderror] = useState("");
  const [hasAccount ,setHaveaccount] = useState(false);

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailerror("");
    setPassworderror("");
  }




  const handleLogin = () => {
    clearErrors ();
   fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
              setEmailerror(err.message);
              break ;
          case "auth/wrong-password":
              setPassworderror(err.message);
              break;
            

        }
      })
  }
  const handlesignup = () => {
    clearErrors();

    fire
       .auth()
       .createUserWithEmailAndPassword(email,password)
       .catch(err => {
         switch(err.code){
           case "auth/email-already-in-use":
           case "auth/invalid-email":
               setEmailerror(err.message);
               break ;
           case "auth/weak-password":
               setPassworderror(err.message);
               break;
             
 
         }
       })
   }
   const handlelogout = () => {
    fire.auth().signOut();   
   };

   const authListener = () => {
     fire.auth().onAuthStateChanged(user => {
       if(user){
         clearInputs();
          
    
         setUser(user);
       }else{
        setUser("");
       }
     });
   };

   useEffect(()=>{
     authListener();
   }, []);

  

   console.log(user.uid);
  return (
    <div className="App">
    
      {user ? <Hero handlelogout={handlelogout} /> : (<Login email = {email} setEmail = {setEmail}  password = {password} setPassword = {setPassword} handleLogin = {handleLogin} handlesignup = {handlesignup}
  hasAccount = {hasAccount} setHaveaccount = {setHaveaccount} emailError = {emailError} passwordError = {passwordError} />
   )}
  
    </div>
  );
}

export default App;
