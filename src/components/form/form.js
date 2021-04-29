import React, { useState, useEffect } from "react";
// import { ConditionallyRender } from "react-util-kit";

 

function Form  ()  {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    function saveUser(){
        console.warn({name,email,mobile});
        let data = {name,email,mobile}
        fetch("http://localhost:5000/posts",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            //console.warn("result",result);
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
        alert('Form is been submitted');
    }
    

  return (
    <div className="form-container">
      
          <>
          <div>
              <form  className="intro">
                <div>Name :- &nbsp;&nbsp;
                  <input  value={name} onChange={(e)=>{setName(e.target.value)}} name="name" className="intro-input"required></input>
                  </div>
                  <div>Email :-  &nbsp; &nbsp;
                  <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" className="intro-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
                  </div>
                  <div>Phone :- &nbsp;
                  <input  value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"className="intro-input"  required></input>
                  </div>      
                  
                  <button type="SUBMIT" className="intro-button"  onClick={saveUser}>Submit</button>
                </form>
            </div>
          </>
  
    </div>
  );
}

export default Form;