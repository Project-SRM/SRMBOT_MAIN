import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../components/aboutsrm/overview";
import Admissions from "../components/admission/admissions";
import Fees from "../components/fees/fees";
import AdmissionIndia from "../components/admission/AdmissionIndia";
import S_and_H from "../components/admission/s_and_h";
import S_and_H_Courses from "../components/admission/s_and_h_courses";
import S_and_H_Courses_Post from "../components/admission/s_and_h_courses_post";
import Law_Courses from "../components/admission/law_courses";
import Law_Courses_Post from "../components/admission/law_courses_post";
import Management_Courses from "../components/admission/management_courses";
import Management_Courses_Post from "../components/admission/management_courses_post";
import Hotel_Management_Courses from "../components/admission/hotel_management_courses";
import S_and_H_BS from "../components/admission/s_and_h_BS";
import S_and_H_BS_Post from "../components/admission/s_and_h_BS_post";
import S_and_H_CS from "../components/admission/s_and_h_CS";
import S_and_H_CS_Post from "../components/admission/s_and_h_CS_post";
import S_and_H_CSA from "../components/admission/s_and_h_CSA";
import S_and_H_Journal_Post from "../components/admission/s_and_h_journal_post";
import S_and_H_PE from "../components/admission/s_and_h_PE";
import S_and_H_Commerce from "../components/admission/s_and_h_commerce";
import Management from "../components/admission/management";
import Law from "../components/admission/law";
import Placement from "../components/admission/placement";
import Placement_act from "../components/admission/placement_act";
import Placement_mile from "../components/admission/placement_mile";
import Placement_about from "../components/admission/placement_about";
import Counselling from "../components/admission/Counselling";
import Graduate from "../components/admission/graduate";
import Programs from "../components/admission/programs";
import Programs_Post from "../components/admission/programs_post";
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
import Med_Courses from "../components/admission/med_courses";
import Med_Courses_post from "../components/admission/med_courses_post";
import Med_Courses1 from "../components/admission/med_courses1";
import Med_Courses2 from "../components/admission/med_courses2";
import Med_Courses3 from "../components/admission/med_courses3";
import Med_Courses4 from "../components/admission/med_courses4";
import Med_Courses5 from "../components/admission/med_courses5";
import Med_Courses4_1 from "../components/admission/med_courses4_1";
import Med_Courses4_2 from "../components/admission/med_courses4_2";
import Med_Courses4_3 from "../components/admission/med_courses4_3";
import Med_Courses4_4 from "../components/admission/med_courses4_4";
import Med_Courses4_5 from "../components/admission/med_courses4_5";
import Med_Courses_post1 from "../components/admission/med_courses_post1";
import Med_Courses_post2 from "../components/admission/med_courses_post2";
import Med_Courses_post3 from "../components/admission/med_courses_post3";
import Med_Courses_post4 from "../components/admission/med_courses_post4";
import Med_Courses_post5 from "../components/admission/med_courses_post5";
import Med_Courses_post1_1 from "../components/admission/med_courses_post1_1";
import Med_Courses_post1_2 from "../components/admission/med_courses_post1_2";
import Med_Courses_post1_3 from "../components/admission/med_courses_post1_3";
import Med_Courses_post4_1 from "../components/admission/med_courses_post4_1";
import Med_Courses_post4_2 from "../components/admission/med_courses_post4_2";
import Med_Courses_post4_3 from "../components/admission/med_courses_post4_3";
import Med_Courses_post4_5 from "../components/admission/med_courses_post4_5";
import Med_Courses_post5_1 from "../components/admission/med_courses_post5_1";
import Med_Courses_post5_2 from "../components/admission/med_courses_post5_2";


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
    
  createChatBotMessage(`Fill the below form to contact us`,
  { widget :"form"}
  ),
  // createChatBotMessage(`Hi there ! How can I help you ?`,
  // { widget :"overview"}
  // )
  createChatBotMessage(`Do you have more queries?`,
  { widget :"queries"}
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
      widgetName: "S_and_H",
      widgetFunc: (props) => <S_and_H {...props} />,
     
    },
    {
      widgetName: "S_and_H_Courses",
      widgetFunc: (props) => <S_and_H_Courses {...props} />,
     
    },
    {
      widgetName: "S_and_H_Courses_Post",
      widgetFunc: (props) => <S_and_H_Courses_Post {...props} />,
     
    },
    {
      widgetName: "Law_Courses",
      widgetFunc: (props) => <Law_Courses {...props} />,
     
    },
    {
      widgetName: "Law_Courses_Post",
      widgetFunc: (props) => <Law_Courses_Post {...props} />,
     
    },
    {
      widgetName: "Management_Courses",
      widgetFunc: (props) => <Management_Courses {...props} />,
     
    },
    {
      widgetName: "Management_Courses_Post",
      widgetFunc: (props) => <Management_Courses_Post {...props} />,
     
    },
    {
      widgetName: "Hotel_Management_Courses",
      widgetFunc: (props) => <Hotel_Management_Courses {...props} />,
     
    },
    {
      widgetName: "S_and_H_CS",
      widgetFunc: (props) => <S_and_H_CS {...props} />,
     
    },
    {
      widgetName: "S_and_H_CS_Post",
      widgetFunc: (props) => <S_and_H_CS_Post {...props} />,
     
    },
    {
      widgetName: "S_and_H_CSA",
      widgetFunc: (props) => <S_and_H_CSA {...props} />,
     
    },
    {
      widgetName: "S_and_H_Journal_Post",
      widgetFunc: (props) => <S_and_H_Journal_Post {...props} />,
     
    },
    {
      widgetName: "S_and_H_BS",
      widgetFunc: (props) => <S_and_H_BS {...props} />,
     
    },
    {
      widgetName: "S_and_H_BS_Post",
      widgetFunc: (props) => <S_and_H_BS_Post {...props} />,
     
    },
    {
      widgetName: "S_and_H_PE",
      widgetFunc: (props) => <S_and_H_PE {...props} />,
     
    },
    {
      widgetName: "S_and_H_Commerce",
      widgetFunc: (props) => <S_and_H_Commerce {...props} />,
     
    },
    {
      widgetName: "Management",
      widgetFunc: (props) => <Management {...props} />,
     
    },
    {
      widgetName: "Law",
      widgetFunc: (props) => <Law {...props} />,
     
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
      widgetName: "programs_post",
      widgetFunc: (props) => <Programs_Post {...props} />,
     
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
    {
      widgetName: "Med_Courses",
      widgetFunc: (props) => <Med_Courses {...props} />,
     
    },
    {
      widgetName: "Med_Courses_post",
      widgetFunc: (props) => <Med_Courses_post {...props} />,
     
    },
    {
      widgetName: "Med_Courses1",
      widgetFunc: (props) => <Med_Courses1 {...props} />,
     
    },
    {
      widgetName: "Med_Courses2",
      widgetFunc: (props) => <Med_Courses2 {...props} />,
     
    },
    {
      widgetName: "Med_Courses3",
      widgetFunc: (props) => <Med_Courses3 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4",
      widgetFunc: (props) => <Med_Courses4 {...props} />,
     
    },
    {
      widgetName: "Med_Courses5",
      widgetFunc: (props) => <Med_Courses5 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4_1",
      widgetFunc: (props) => <Med_Courses4_1 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4_2",
      widgetFunc: (props) => <Med_Courses4_2 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4_3",
      widgetFunc: (props) => <Med_Courses4_3 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4_4",
      widgetFunc: (props) => <Med_Courses4_4 {...props} />,
     
    },
    {
      widgetName: "Med_Courses4_5",
      widgetFunc: (props) => <Med_Courses4_5 {...props} />,
     
    },
    {
      widgetName: "Med_Courses_post1",
      widgetFunc: (props) => <Med_Courses_post1 {...props} />,
     
    },{
      widgetName: "Med_Courses_post2",
      widgetFunc: (props) => <Med_Courses_post2 {...props} />,
     
    },{
      widgetName: "Med_Courses_post3",
      widgetFunc: (props) => <Med_Courses_post3 {...props} />,
     
    },{
      widgetName: "Med_Courses_post4",
      widgetFunc: (props) => <Med_Courses_post4 {...props} />,
     
    },
    {
      widgetName: "Med_Courses_post5",
      widgetFunc: (props) => <Med_Courses_post5 {...props} />,
    }
    ,{
      widgetName: "Med_Courses_post1_1",
      widgetFunc: (props) => <Med_Courses_post1_1 {...props} />,
    }
    ,{
      widgetName: "Med_Courses_post1_2",
      widgetFunc: (props) => <Med_Courses_post1_2 {...props} />,
    },
    {
      widgetName: "Med_Courses_post1_3",
      widgetFunc: (props) => <Med_Courses_post1_3 {...props} />,
    },
    {
      widgetName: "Med_Courses_post4_1",
      widgetFunc: (props) => <Med_Courses_post4_1 {...props} />,
    },
    {
      widgetName: "Med_Courses_post4_2",
      widgetFunc: (props) => <Med_Courses_post4_2 {...props} />,
    },
    {
      widgetName: "Med_Courses_post4_3",
      widgetFunc: (props) => <Med_Courses_post4_3 {...props} />,
    },
    {
      widgetName: "Med_Courses_post4_5",
      widgetFunc: (props) => <Med_Courses_post4_5 {...props} />,
    },
    {
      widgetName: "Med_Courses_post5_1",
      widgetFunc: (props) => <Med_Courses_post5_1 {...props} />,
    },
    {
      widgetName: "Med_Courses_post5_2",
      widgetFunc: (props) => <Med_Courses_post5_2 {...props} />,
    },
    
    
  ]
}

export default config;