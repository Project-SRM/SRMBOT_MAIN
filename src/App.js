// import React from "react";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";



import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//      <Chatbot 
//      config={config}
//      actionProvider={ActionProvider}
//      messageParser={MessageParser} />
//     </div>
//   );
// }
function App() {
  //const [showBot, toggleBot] = useState(false);
  
  // const saveMessages = (messages) => {
  //   localStorage.setItem("chat_messages", JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem("chat_messages"));
  //   return messages;
  // };

  return (
    <div className="App">
        {/* {showBot && */}
         
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
           // messageHistory={loadMessages()}
            messageParser={MessageParser}
            //saveMessages={saveMessages}
          />
        
        {/* } */}
        {/* <button onClick={() => toggleBot((prev) => !prev)} class="toggle-button">SRMBOT</button>  */}
    </div>
  );
}
export default App;
