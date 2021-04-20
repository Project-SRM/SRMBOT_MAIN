import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";


import './App.css';

function App() {
  return (
    <div className="App">
     
     <Chatbot 
     config={config}
     actionProvider={ActionProvider}
     messageParser={MessageParser} />
    </div>
  );
}

export default App;
