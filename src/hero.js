import React ,{useState,useEffect,Component} from "react";
import { readString } from 'react-papaparse' ;
import MuiAlert from "@material-ui/lab/Alert"


import './hero.css'
import fire from './fire';
const Hero = (props) => {
    var data = [];

    const [sum,total] = useState();
    const [setCount,count] = useState(0);
    const [csvFile,setCsvfile] = useState();   
    const [submitclicked,hassubmited] = useState(false);
    const [success ,failure] = useState(false);

    const addUser = (e) => {
        e.preventDefault();
        const db = fire.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
          
          email:fire.auth().currentUser.email,
          reward: sum ,
          t_count: setCount ,
          transaction: sum ,
          uid: fire.auth().currentUser.uid
        }); 
       failure(!success);
        
        
      
      };

      function Alert(props) {
        return <MuiAlert elevation={6} 
                         variant="filled" {...props} />;
      }
    const submit = () => {
        const file = csvFile ;
        const reader = new FileReader ;
        reader.onload = (e) => {
            const text =  e.target.result ;
            // console.log(text);
            readString(text, {
                worker: true,
                complete: (results) => {
                    var amount = 0;
                 data=   results.data ;
                 for(let i = 0 ; i< data.length -1 ;  i++){
                    
                     if(i==0){
                         console.log("headers");
                     }
                     else {
                         amount = amount+ parseInt(data[i][2]);
                      
                           
                        //  console.log(amount);
                         total(amount)
                         count(i+1);
                         console.log(sum);
                         
                     }


                 }
               
             
              
                 
                }
              })
              hassubmited(!submitclicked) ;

        }
        reader.readAsText(file);
    }
 
    return (
        <>
        <section className="zero">
        <section className="hero">
            <nav><h2>
                {fire.auth().currentUser.email} </h2>
                <button onClick={props.handlelogout}>Logout</button>
                </nav>

              
                <div class="area">
               
   
    <center >
                <input id= "dropZone" type="file" accept=".csv"  onChange={ (e) => {setCsvfile(e.target.files[0])}}/>
                
                </center>
               
    </div>
    <button className="submit" type="button"  onClick={ (e) => {
        e.preventDefault()
         if(csvFile) submit()
    }} >Submit</button>
    {
        submitclicked ? <center>
            {/* <p>Total number of transactions =   {setCount}</p>
        <p >Total Amount of transactions =  {sum}</p>
        <p>Total Reward for transactions =  {sum}</p> */}
          <table>
  <tr>
    <th>Spending Analyst</th>
    <th>Amount</th>
   
  </tr>
  <tr>
    <td>Total transactions</td>
    <td>{setCount}</td>
   
  </tr>
  <tr> <td>Total Amount oftransactions</td>
    <td>{sum}</td>
   </tr>
   
  <tr>

    <td>reward Gains</td>
    <td>{setCount *10}</td>
   
  
    
  </tr>
</table> 
        <button className="submit"type="button"  onClick={ (e) => {
        e.preventDefault()
         if(csvFile) addUser(e)
    }} >Upload data </button>
    {success ? <Alert severity="success"><center>Succesfully Posted</center></Alert>: <div></div>}
 </center> : <div></div>
    }
    
    
                
        </section>

        </section>
       
       

       
        </>
      
    )
}
export default Hero;