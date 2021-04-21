class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet = () =>
    {const message= this.createChatBotMessage("Hello friend. ");
    this.addMessageToState(message);

    };
    handlecounselling = () => {
      const message = this.createChatBotMessage(
        "Do you want to know about :",
        {
          widget: "Counselling",
        }
      );
      this.addMessageToState(message);
    };
    handleapplication = () => {
      const message = this.createChatBotMessage(
        "Do you want to know about :",
        {
          widget: "applicationQues",
        }
      );
      this.addMessageToState(message);
    };
    srmjee = () => {
      const message = this.createChatBotMessage(
        "Do you want to know about :",
        {
          widget: "srmjee",
        }
      );
      this.addMessageToState(message);
    };
    handleeligibility = () => {
      const message = this.createChatBotMessage(
        "Do you want to know about :",
        {
          widget: "eligibility",
        }
      );
      this.addMessageToState(message);
    };
    el1 = () => {
      const message = this.createChatBotMessage(
        " Eligibility criteria is minimum aggregate of 60% in PCM/PCB for KTR, Ramapuram and Vadapalani. For NCR campus its 55%.",
        
      );
      this.addMessageToState(message);
    };
    el2 = () => {
      const message = this.createChatBotMessage(
        "Candidates with Biology, Physics, Chemistry are eligible for admission to B.Tech in Biotechnology, Biomedical engineering and Genetic Engineering.",
        
      );
      this.addMessageToState(message);
    };
    el3 = () => {
      const message = this.createChatBotMessage(
        "Not possible, because our regulations do not have provision for such a migration",
        
      );
      this.addMessageToState(message);
    };
    el4 = () => {
      const message = this.createChatBotMessage(
        "Eligible, provided you are a student of Accredited Institution of NIOS.",
        
      );
      this.addMessageToState(message);
    };
    appli1 = () => {
      const message = this.createChatBotMessage(
        "It is already released Candidates can apply online with e-payment or DD payment.You must ensure correctness of data before final submission. In case of any error, from your dashboard and submit the details of the corrections to be done. We shall effect the corrections and inform the same."
      
      );
      this.addMessageToState(message);
    };
    appli2 = () => {
      const message = this.createChatBotMessage(
        "The fee structure is available in our web portal. Click here for details http://www.srmist.edu.in/admission-india/fee-details/engineering_and_technologyFees structure is same as for the first year B.Tech students . Admission will be offered depending on the availability of seats. Interested candidates can contact us",
        
      );
      this.addMessageToState(message);
    };
    appli3 = () => {
      const message = this.createChatBotMessage(
        "If you possess a valid admit card with photograph issued by us, there is no need for any other ID proof.",
        
      );
      this.addMessageToState(message);
    };
    appli4 = () => {
      const message = this.createChatBotMessage(
        "Top 1000 rankers in IIT JEE, Top rankers in Board Examinations and districts toppers in Tamil Nadu state are recommended to approach Directorate of Admission with valid proof",
        
      );
      this.addMessageToState(message);
    };
    appli5 = () => {
      const message = this.createChatBotMessage(
        "Yes. You can apply and appear for Entrance Examination.",
        
      );
      this.addMessageToState(message);
    };
     
    Coun1 = () => {
      const message = this.createChatBotMessage(
        "  Counseling may take about 6 hours and we don't have any facility. You have to make your own arrangement.",
        
      );
      this.addMessageToState(message);
    };
    Coun2 = () => {
      const message = this.createChatBotMessage(
        "Counseling date can't be rescheduled. No need to deposit, but you have to produce all original certificates for scrutiny by the University.",
        
      );
      this.addMessageToState(message);
    };
    Coun5 = () => {
      const message = this.createChatBotMessage(
        "SRM  plays the role of a facilitator in this aspect. Number of banks will be available in the counseling venue to process loan application and issue on the- spot in -principle sanctioning letter.",
        
      );
      this.addMessageToState(message);
    };
    Coun3 = () => {
      const message = this.createChatBotMessage(
        "All the fees have to be paid online or by DD. Please see the information under refund published in our web portal.",
        
      );
      this.addMessageToState(message);
    };
    Coun4 = () => {
      const message = this.createChatBotMessage(
        " It is not compulsory. But, the presence of candidate is mandatory.",
        
      );
      this.addMessageToState(message);
    };
    elsemessage = () => {
      const message = this.createChatBotMessage(
        "Could you eleborate on that ?",
        
      );
      this.addMessageToState(message);
    };
    syllabus = () => {
      window.open("https://webstor.srmist.edu.in/web_assets/downloads/2021/syllabus-for-srmjee-2021.pdf");
    };
    test = () => {
      window.open("https://webstor.srmist.edu.in/web_assets/downloads/2021/test-cities-srmjeee-srmjeeh-2021.pdf");
    };
    dates = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/important-dates");
    };
    contact = () => {
      window.open("https://www.srmist.edu.in/contact-us");
    };
    loan = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/fees/loans");
    };
    tutionfees = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/fees/tuition-fee#0");
    };
    hostelfees = () => {
      window.open("https://www.srmist.edu.in/hostel-fee-structure-academic-year-2020-21-first-year-students-boys-girls");
    };
    transportfees = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/fees/transport-fee");
    };
    refund = () => {
      window.open("https://www.srmist.edu.in/admission-india/cancellation-of-admission-and-refund-policy");
    };
    scholarship = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/fees/scholarships");
    };
    CounKnowMore = () => {
      window.open("https://www.srmist.edu.in/admission-india/faqs#0");
    };
    course = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/programs-offered");
    };
    academics = () => {
      window.open("https://www.srmist.edu.in/");
    };
    postgrad = () => {
      window.open("https://www.srmist.edu.in/");
    };
    international = () => {
      window.open("https://www.srmist.edu.in/admission-international/content/faqs#");
    };
    events = () => {
      window.open("https://www.srmist.edu.in/events-archive/2021");
    };
    research = () => {
      window.open("https://www.srmist.edu.in/research/research-details");
    };
    campus = () => {
      window.open("https://www.srmist.edu.in/campus/campus");
    };
    
    ElKnowMore = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/admission-procedure-eligibility");
    };
    adminCriteria = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/admission-procedure-admission-criteria");
    };
    howToApply = () => {
      window.open("https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply");
    };
    
      handlegraduate = () => {
        const message = this.createChatBotMessage(
          "May I know the program you are looking for",
          {
            widget: "graduate",
          }
        );
      this.addMessageToState(message);
    };
    handleprograms = () => {
      const message = this.createChatBotMessage(
        "May I know which stream are you interested in",
        {
          widget: "programs",
        }
      );
    this.addMessageToState(message);
  };
    handleadmissions = () => {
      const message = this.createChatBotMessage(
        "Within admissions:",
        {
          widget: "admissions",
        }
      );
      this.addMessageToState(message);
    };
    handleAdmissionIndia = () => {
      const message = this.createChatBotMessage(
        "Your queries are related to :",
        {
          widget: "AdmissionIndia",
        }
      );
      this.addMessageToState(message);
    };
    
    handleaboutus = () => {
      const message = this.createChatBotMessage(
        "SRM Institute of Science and Technology  is one of the top ranking universities in India with over 52,000 full time students and more than 3200 faculty across all the campuses - Kattankulathur, Ramapuram, Vadapalani Campus – all in and around Chennai,   and Modinagar, NCR, Delhi - offering a wide range of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences . for Detailed Info please visit https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings",
        {
          widget: "aboutus",
        }
      );
      this.addMessageToState(message);
    };
    aboutusPage = () => {
      window.open("https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings");
    };
    hostel = () => {
      window.open("https://www.srmist.edu.in/sample-faqs-hostel");
    };
    
    apply = () => {
      window.open("https://www.srmist.edu.in/admission-india/");
    };
    fees = () => {
      const message = this.createChatBotMessage(
        "Which fee structure do you want to know about?",
        {
          widget: "fees",
        }
      );
      this.addMessageToState(message);
    };
    
    
      addMessageToState = (message) =>
    {
       this.setState(prevState  => (
         {
           ...prevState,
           messages:[...prevState.messages , message]
         }
       ));
    };
  }
  
  export default ActionProvider;
  