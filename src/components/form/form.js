import React, { useState, useEffect } from "react";
// import { ConditionallyRender } from "react-util-kit";
// import firebase from '.../firebase'




function Form  ()  {
  
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
   
    
  function saveUser(){
      console.warn({name,email,mobile});
      let data = {name,email,mobile}
      if(name!=""&&email!=""&&mobile!=""){
      fetch("http://localhost:5000/posts",{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
      }).then((result)=>{
          console.warn("result",result);
          result.json().then((resp)=>{
              console.warn("resp",resp)
          })
      })
}


      if(name!=""&&email!=""&&mobile!=""){
        alert("Form Submitted");
       }
        
     
    }
    
    // prompt("Please enter your name", "Harry Potter");
  return (
    <div className="form-container">
      
          <>
          <div>
              <form  className="intro" >
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
                  <input  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Full Name" name="name" className="intro-input"required></input>
                  </div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                  <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" className="intro-input" placeholder="Enter Email-Id" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
                  </div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone Number
                  <input  value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"className="intro-input" placeholder="  Enter Phone Number"  required></input>
                  </div>      
                  
                  <button type="SUBMIT" id="SubmitId" className="intro-button"  onClick={saveUser} >Submit</button>
                  
                </form>
            </div>
          </>
  
    </div>
    

  );
  
}


export default Form;