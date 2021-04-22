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
    tutionfeesmessage = () => {
      const message = this.createChatBotMessage(
      "FEES STRUCTURE UG Programs KTR\n\nBio-Engineering -2.5 lakhs\nNanotechnology-3.75 lakhs\nCivil Engineering -2.5lakhs\nComputer Science Engineering- 2.5-3.5 lakhs\n Electrical and Electronics Engineering - 2.5 lakhs\nAerospace Engineering - 3.75 lakhs\nMechanical Engineering - 2.5 lakhs\nArchitechture - 2.75 lakhs\nInterior Designing-1.5 lakhs  ",
      {
        widget: "tutionfees",
      }
      );
      this.addMessageToState(message);
    }
    transportfeesmessage = () => {
      const message = this.createChatBotMessage(
        "Air conditioned college buses will be operated from limited parts of Chennai city.\nOnline Bus Booking Mode is also available (Except First Year)\nBus Fee Rs. 50,000/- Demand Draft in favour of SRMIST payable at Chennai\nThe fees will be accepted subject to the availability of seats.\nBus fees once paid will not be refunded / adjusted under any circumstances.",
        {
          widget: "transportfees",
        }
      );
      this.addMessageToState(message);
    }
    hostelfeesmessage = () => {
      const message = this.createChatBotMessage(
        "Boy's Hostel AC 2,18,000-2,28,000\n Boy's Hostel Non-AC 92,000-1,33,000\n Girl's Hostel AC 2,13,000-2,38,000\n Girl's Hostel Non-AC  1,02,500-1,43,000",
        {
          widget: "hostelfees",
        }
      );
      this.addMessageToState(message);
    }
    // hostelfeesmessage = () => {
    //   const message = this.createChatBotMessage(
    //     "FEE STRUCTURE GIRL'S HOSTEL\n1.) AC-with attached Washroom 2 Sharing (Sister Nivedita (M) Block) - 2,38,000\n2.) AC-with attached Washroom 2 & 3 Sharing (Kalpana Chawla) - 2,13,000\n3.) Non AC-with attached Washroom 2 Sharing (Sister Nivedita (M) Block) - 1,43,000\n4.) Non AC – with attached Washroom 3 Sharing (Meenakshi) - 1,14,500\n5.) Non AC – with common Washroom 6 Sharing (Senbagam) - 1,02,500\n\nLAUNDRY FEES\n1.) Rs.6000/- for BOYS is Optional\n2.) Rs.7000/- for GIRLS is Optional.\n\nFor any queries related to Hostels and Hostel Bookings, please contact\nEmail ID: hostel.helpdesk.ktr@srmist.edu.in",
    //     {
    //       widget: "hostelfees",
    //     }
    //   );
    //   this.addMessageToState(message);
    // }
    
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
    hostelQues1 = () => {
      const message = this.createChatBotMessage(
        "The rooms come equipped with a table, chair, cot and a cupboard for each student. All the rooms are triple sharing with 2 fans and sufficient sockets. A big sized mirror is provided in each room.",
        
      );
      this.addMessageToState(message);
    };
    hostelQues2 = () => {
      const message = this.createChatBotMessage(
        "The bed and bathroom accessories, such as mattresses, pillows, bed covers, buckets, mugs etc., need to be purchased by the students. The students can purchase the same at the University shops within the campus.",
        
      );
      this.addMessageToState(message);
    };
    hostelQues3 = () => {
      const message = this.createChatBotMessage(
        "Each hostel block has a R.O. Plant and Solar Heater. Hence pure drinking water and hot water for bath are available. The hostels are Wi-Fi enabled.",
        
      );
      this.addMessageToState(message);
    };
    hostelQues4 = () => {
      const message = this.createChatBotMessage(
        "There are separate ‘Gymnasiums’ for Boys hostel and Girls hostel. In addition to the above, sports materials such as Cricket Bats, Shuttlecocks, Throw balls, Volley balls and Indoor games are available in each block. Movies are arranged periodically at the common area of the hostels (or) University open auditorium. Student activity centre and incubation centers are available in the University Complex.",
        
      );
      this.addMessageToState(message);
    };
    hostelQues5 = () => {
      const message = this.createChatBotMessage(
        "The Hostel Mess is run by the management. Menu will be displayed on the notice board. Changes to the menu can be made through the Mess Committee. In addition to the Mess service, Canteens and Food courts are also available for students’ use.");
      this.addMessageToState(message);
    };
    hostelQues6 = () => {
      const message = this.createChatBotMessage(
        "SRM Hostel provides laundry and dry cleaning service to the hostellers. Equipped with state-of-the art machinery, every kind of cloth and fabric can be serviced.",
        
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
    blankmessage = () => {
      const message = this.createChatBotMessage(
        "Please type something",
        
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
      const message = this.createChatBotMessage(
        "What do you want to know about?",
        {
          widget: "hostelQues",
        }
      );
      this.addMessageToState(message);
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
  