import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Admissions from "../components/admissions/admissions";
import AboutUs from "../components/aboutus/aboutus";
import Fees from "../components/fees/fees";
import AdmissionIndia from "../components/AdmissionIndia/AdmissionIndia";
import Counselling from "../components/Counselling/Counselling";
import Graduate from "../components/graduate/graduate";
import Programs from "../components/programs/programs";
import ApplicationQues from "../components/applicationQues/applicationQues";
import Eligibility from "../components/eligibility/eligibility";

const botName = "SRMBOT";
const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#063a7e",
      
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [createChatBotMessage(`Hi there ! How can I Help you ?`,{ widget :"options"})],
  widgets :
  [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
     
    },
    {
      widgetName: "admissions",
      widgetFunc: (props) => <Admissions {...props} />,
     
    },
    {
      widgetName: "aboutus",
      widgetFunc: (props) => <AboutUs {...props} />,
     
    },
    {
      widgetName: "fees",
      widgetFunc: (props) => <Fees {...props} />,
     
    },
    {
      widgetName: "AdmissionIndia",
      widgetFunc: (props) => <AdmissionIndia {...props} />,
     
    },
    {
      widgetName: "Counselling",
      widgetFunc: (props) => <Counselling {...props} />,
     
    },
    {
      widgetName: "graduate",
      widgetFunc: (props) => <Graduate {...props} />,
     
    },
    {
      widgetName: "programs",
      widgetFunc: (props) => <Programs {...props} />,
     
    },
    {
      widgetName: "applicationQues",
      widgetFunc: (props) => <ApplicationQues {...props} />,
     
    },
    {
      widgetName: "eligibility",
      widgetFunc: (props) => <Eligibility {...props} />,
     
    },
    
  ]
}

export default config;