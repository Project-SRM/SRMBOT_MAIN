import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../components/aboutsrm/overview";
import Admissions from "../components/admission/admissions";
import Fees from "../components/fees/fees";
import AdmissionIndia from "../components/admission/AdmissionIndia";
import Placement from "../components/admission/placement";
import Placement_act from "../components/admission/placement_act";
import Placement_mile from "../components/admission/placement_mile";
import Placement_about from "../components/admission/placement_about";
import Counselling from "../components/admission/Counselling";
import Graduate from "../components/admission/graduate";
import Programs from "../components/admission/programs";
import ApplicationQues from "../components/admission/applicationQues";
import Eligibility from "../components/admission/eligibility";
import Srmjee from "../components/admission/srmjee";
import HostelQues from "../components/aboutsrm/hostelQues";
import Queries from "../components/aboutsrm/queries";
import Tutionfees from "../components/fees/tutionfees";
import Transportfees from "../components/fees/transportfees";
import Hostelfees from "../components/fees/hostelfees";
import School from "../components/school/school";
import Bio from "../components/school/bio";
import Chem from "../components/school/chem";
import Civil from "../components/school/civil";
import Cse from "../components/school/cse";
import Mech from "../components/school/mech";
import Eee from "../components/school/eee";
import Arch from "../components/school/arch";
import Form from "../components/form/form";


const botName = "SRMBOT";
const config = {
  
  botName: botName,
  lang: "no",
  customComponents: {

    header: () => botName,
  
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#063a7e",
      
    },
    chatButton: {
      backgroundColor: "#063a7e",
    },
  },
  initialMessages: [
    // createChatBotMessage(
    //   "Type your name",
    //   {
    //     withAvatar: false,
    //     delay: 500,
    //     widget: "overview",
    //     NoAnswer: true
    //   }
    // ),
    
  createChatBotMessage(`Fill the below form to proceed`,
  { widget :"form"}
  ),
  createChatBotMessage(`Hi there ! How can I help you ?`,
  { widget :"overview"}
  )

],
  widgets :
  [
    {
      widgetName: "form",
      widgetFunc: (props) => <Form {...props} />,
      
     
    },
    {
      widgetName: "queries",
      widgetFunc: (props) => <Queries {...props} />,
      
     
    },
    {
      widgetName: "placement",
      widgetFunc: (props) => <Placement {...props} />,
      
     
    },
    {
      widgetName: "placement_act",
      widgetFunc: (props) => <Placement_act {...props} />,
      
     
    },
    {
      widgetName: "placement_mile",
      widgetFunc: (props) => <Placement_mile {...props} />,
      
     
    },
    {
      widgetName: "placement_about",
      widgetFunc: (props) => <Placement_about {...props} />,
      
     
    },
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
     
    },
    {
      widgetName: "admissions",
      widgetFunc: (props) => <Admissions {...props} />,
     
    },
    // {
    //   widgetName: "aboutus",
    //   widgetFunc: (props) => <AboutUs {...props} />,
     
    // },
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
    {
      widgetName: "srmjee",
      widgetFunc: (props) => <Srmjee {...props} />,
     
    },
    {
      widgetName: "hostelQues",
      widgetFunc: (props) => <HostelQues {...props} />,
     
    },
    {
      widgetName: "transportfees",
      widgetFunc: (props) => <Transportfees {...props} />,
     
    },
    {
      widgetName: "hostelfees",
      widgetFunc: (props) => <Hostelfees {...props} />,
     
    },
    {
      widgetName: "tutionfees",
      widgetFunc: (props) => <Tutionfees {...props} />,
     
    },
    {
      widgetName: "school",
      widgetFunc: (props) => <School {...props} />,
     
    },
    {
      widgetName: "bio",
      widgetFunc: (props) => <Bio {...props} />,
     
    },
    {
      widgetName: "chem",
      widgetFunc: (props) => <Chem {...props} />,
     
    },
    {
      widgetName: "civil",
      widgetFunc: (props) => <Civil {...props} />,
     
    },
    {
      widgetName: "cse",
      widgetFunc: (props) => <Cse {...props} />,
     
    },
    {
      widgetName: "eee",
      widgetFunc: (props) => <Eee {...props} />,
     
    },
    {
      widgetName: "mech",
      widgetFunc: (props) => <Mech {...props} />,
     
    },
    {
      widgetName: "arch",
      widgetFunc: (props) => <Arch {...props} />,
     
    },
    
  ]
}

export default config;