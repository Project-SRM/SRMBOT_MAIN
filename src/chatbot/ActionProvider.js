class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  greet = () => {
    
    const message = this.createChatBotMessage("Hello friend. ");
    this.addMessageToState(message);
  };


  /////////////////////////////////////Overview/////////////////////////////
  
  academics = () => {
    const message = this.createClientMessage("Academics");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in</p></a>);
    this.addMessageToState(a); 
  };
  postgrad = () => {
    const message = this.createClientMessage("Post Graduate");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in/</p></a>);
    this.addMessageToState(a);    
  };
  international = () => {
    const message = this.createClientMessage("International");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-international/content/faqs#"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/ad-mission-international/content/faqs#</p></a>);
    this.addMessageToState(a);    
  };
  events = () => {
    const message = this.createClientMessage("Events");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/events-archive/2021"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/events-archive/2021</p></a>);
    this.addMessageToState(a);  
  };
  research = () => {
    const message = this.createClientMessage("Research");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/research/research-details"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/re-search/research-details</p></a>);
    this.addMessageToState(a);
  };
  campus = () => {
    
    const message = this.createClientMessage("Campus Life");
    this.addMessageToState(message);

    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/campus/campus"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/ca-mpus/campus</p></a>);
    this.addMessageToState(a);
  };
  handleaboutus = () => {
    const message1 = this.createClientMessage("About Us");
    
    const message = this.createChatBotMessage(
      "SRM Institute of Science and Technology  is one of the top ranking universities in India with over 52,000 full time students and more than 3200 faculty across all the campuses - Kattankulathur, Ramapuram, Vadapalani Campus – all in and around Chennai,   and Modinagar, NCR, Delhi - offering a wide range of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences .",
      {
        widget: "aboutus",
      }
    );
    const message2 =this.createChatBotMessage( <a href="https://www.srmist.edu.in/aboutus/srm-university-where-you-have-freedom-take-wings"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/abo-utus/srm-university-where-you-have-freedom-take-wings</p></a>);
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  apply = () => {
    const message = this.createClientMessage("Apply");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/admission-india/");
  };
  contact = () => {
    const message = this.createClientMessage("Contact Us");
    this.addMessageToState(message);
    

    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/contact-us"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/co-ntact-us</p></a>);
    this.addMessageToState(a);
  };

  ////////////////////////Admission/////////////////////
  handleadmissions = () => {
    const message1 = this.createClientMessage("Admissions");
    const message = this.createChatBotMessage("Within admissions:", {
      widget: "admissions",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  ////////////Admission India/////////////////// 

  handlegraduate = () => {
    const message1 = this.createClientMessage("India");

    const message = this.createChatBotMessage(
      "May I know the program you are looking for",
      {
        widget: "graduate",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleprograms = () => {
    const message1 = this.createClientMessage("Under Graduate");
    
    const message = this.createChatBotMessage(
      "May I know which stream are you interested in",
      {
        widget: "programs",
      }
    );
this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  
  handleAdmissionIndia = () => {
    const message1 = this.createClientMessage("Engineering");
    const message = this.createChatBotMessage("Your queries are related to :", {
      widget: "AdmissionIndia",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

//////////////////////////////Counselling///////////////////////////////////
  handlecounselling = () => {
    const message1=this.createClientMessage("Counselling");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "Counselling",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  CounKnowMore = () => {
    const message = this.createClientMessage("Know More");
    this.addMessageToState(message);
    window.open("https://www.srmist.edu.in/admission-india/faqs#0");
  };
  ////////////////////counselling questions////////////////////////////////////
  
  Coun1 = () => {
    const message1=this.createClientMessage("What is the Duration of Counselling and Facility to stay in Campus?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "  Counseling may take about 6 hours and we don't have any facility. You have to make your own arrangement."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  Coun2 = () => {
    const message1=this.createClientMessage("Can the date be rescheduled and Should we deposit the original certificates?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "Counseling date can't be rescheduled. No need to deposit, but you have to produce all original certificates for scrutiny by the University."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  Coun5 = () => {
    const message1=this.createClientMessage("Does SRM arrange for educational loans? For more information:");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "SRM  plays the role of a facilitator in this aspect. Number of banks will be available in the counseling venue to process loan application and issue on the- spot in -principle sanctioning letter."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  Coun3 = () => {
    const message1=this.createClientMessage("Can counselling fees be paid in cash and is it refundable?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      "All the fees have to be paid online or by DD. Please see the information under refund published in our web portal."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  Coun4 = () => {
    const message1=this.createClientMessage("Should parents come along with candidates?");
    this.addMessageToState(message1);
    const message = this.createChatBotMessage(
      " It is not compulsory. But, the presence of candidate is mandatory."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
////////////////////////////////Application//////////////////////////////////////
  handleapplication = () => {
    const message1=this.createClientMessage("Application")
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "applicationQues",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  ////////////////////admission criteria//////////////////////////////////
  adminCriteria = () => {
    const message = this.createClientMessage("Admission Criteria");
    this.addMessageToState(message);
   
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/admission-procedure-admission-criteria"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/admission-india/engineering/admission-procedure-admission-criteria</p></a>);
    this.addMessageToState(a);
  };
//////////////////////////////////courses offered//////////////////////////
  course = () => {
    const message1= this.createClientMessage("Courses Offered");
    const message = this.createChatBotMessage("Courses Offered :", {
      widget: "school",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  /////////////////////application questions/////////////////////////////////////
appli1 = () => {
  const message1=this.createClientMessage("When will be the applicaiton form be issued & how to enter data?");
  
  const message = this.createChatBotMessage(
    "It is already released Candidates can apply online with e-payment or DD payment.You must ensure correctness of data before final submission. In case of any error, from your dashboard and submit the details of the corrections to be done. We shall effect the corrections and inform the same."
  );
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
appli2 = () => {
  const message1=this.createClientMessage("What are the fee structure for admission in various programs and for lateral entry?");
  const message = this.createChatBotMessage(
    "The fee structure is available in our web portal. Click here for details http://www.srmist.edu.in/admission-india/fee-details/engineering_and_technologyFees structure is same as for the first year B.Tech students . Admission will be offered depending on the availability of seats. Interested candidates can contact us"
  );
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
appli3 = () => {
  const message1=this.createClientMessage("What are the required documents for SRMJEEE?");
  const message = this.createChatBotMessage(
    "If you possess a valid admit card with photograph issued by us, there is no need for any other ID proof."
  );
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
appli4 = () => {
  const message1=this.createClientMessage("Are jee and other govt exam marks considered in SRM?");
  this.addMessageToState(message1);
  const message = this.createChatBotMessage(
    "Top 1000 rankers in IIT JEE, Top rankers in Board Examinations and districts toppers in Tamil Nadu state are recommended to approach Directorate of Admission with valid proof"
  );
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
appli5 = () => {
  const message1=this.createClientMessage("Can an NRI candidate apply for entrance examination?");
  this.addMessageToState(message1);
  const message = this.createChatBotMessage(
    "Yes. You can apply and appear for Entrance Examination."
  );
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
//////////////////// Else conditions////////////////////////////////
blankmessage = () => {
  const message = this.createChatBotMessage("Please type something");
  this.addMessageToState(message);
};
elsemessage = () => {
  const message = this.createChatBotMessage("Could you eleborate on that ?");
  this.addMessageToState(message);
};
  
  ///////////////////////////////////SRMJEE////////////////////////////////////////
  srmjee = () => {
    const message1 = this.createClientMessage("SRMJEE");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "srmjee",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
 
  howToApply = () => {
    const message = this.createClientMessage("How to apply");
    this.addMessageToState(message);
    // window.open(
    //   "https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply"
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply</p></a>);
    this.addMessageToState(a);
  };

  syllabus = () => {
    const message1=this.createClientMessage("Syllabus");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://webstor.srmist.edu.in/web_assets/downloads/2021/syllabus-for-srmjee-2021.pdf"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://webstor.srmist.ed-u.in/web_assets/downlo-ads/2021/syllabus-for-srmjee-2021.pdf</p></a>);
    this.addMessageToState(a); 
  };
  test = () => {
    const message1=this.createClientMessage("Test Cities");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://webstor.srmist.edu.in/web_assets/downloads/2021/test-cities-srmjeee-srmjeeh-2021.pdf"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://webstor.srmist.ed-u.in/web_assets/downlo-ads/2021/test-cities-srmjeee-srmjeeh-2021.pdf</p></a>);
    this.addMessageToState(a); 
    
  };
  dates = () => {
    const message1=this.createClientMessage("Important Dates");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/important-dates"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in/admis-sion-india/engineering/important-dates</p></a>);
    this.addMessageToState(a); 
  };
  //////////////////////////Eligibility////////////////////////////////////
  handleeligibility = () => {
    const message1 = this.createClientMessage("Eligibility");
    const message = this.createChatBotMessage("Do you want to know about :", {
      widget: "eligibility",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  ElKnowMore = () => {
    const message = this.createClientMessage("Know more");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/admission-procedure-eligibility"
    );    
  };
  ////////////////eligibility questions/////////////////////////////////////
  el1 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Tech Programs?");
    const message = this.createChatBotMessage(
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM"
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  el2 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Arch ?");
    const message = this.createChatBotMessage(
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM / PMB/PCB."
      
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el3 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for Bio-Engineering Programs?");
    const message = this.createChatBotMessage(
      " A pass in 10+2 examination with at least 50% aggregate marks in Physics, Chemistry & Mathematics and also at least 50% marks in aggregate of the 10+2 level examination or passed 10+3 Diploma Examination with Mathematics as compulsory subject with at least 50% marks in aggregate."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });

    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el4 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Des?");
    const message = this.createChatBotMessage(
      "A Pass in 10+2 (Higher Secondary) examination or any other equivalent examination of any authority recognized by SRMIST with a minimum of 50% aggregate/percentage of marks. Criteria 1: UCEED Score + (Written Exam + Personal Interview) at SRMIST Criteria 2: Written Exam + Personal Interview at SRMIST"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el5 = () => {
    const message1=this.createClientMessage("What are the courses in B.Tech for which a student with PCB is eligible?");
    const message = this.createChatBotMessage(
      "Candidates with Biology, Physics, Chemistry are eligible for admission to B.Tech in Biotechnology, Biomedical engineering and Genetic Engineering."
     
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el6 = () => {
    const message1=this.createClientMessage("My ward is currently doing his B.Tech 1st year in other University. can I join him in SRM from 2nd year?");
    const message = this.createChatBotMessage(
      "Not possible, because our regulations do not have provision for such a migration"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el7 = () => {
    const message1=this.createClientMessage("I Am studying HSC through NIOS, Am I eligible?");
    const message = this.createChatBotMessage(
      "Eligible, provided you are a student of Accredited Institution of NIOS."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  //////////////////////////////Fees//////////////////////////////
  fees = () => {
    const message1 = this.createClientMessage("Fee Details");
    const message = this.createChatBotMessage(
      "Which fee structure do you want to know about?",
      {
        widget: "fees",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  //////////////////////refund/////////////////////////////
  refund = () => {
    const message = this.createClientMessage("Refund");
    this.addMessageToState(message);
    

    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/cancellation-of-admission-and-refund-policy"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/ad-mission-india/cancellation-of-admission-and-refund-policy</p></a>);
    this.addMessageToState(a);
  };
  //////////////////////scholarship//////////////////////////
  scholarship = () => {
    const message = this.createClientMessage("Scholarship");
    this.addMessageToState(message);
   
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/fees/scholarships"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/ad-mission-india/engineering/fees/scholarships</p></a>);
    this.addMessageToState(a);
  };
  ///////////////////////////loan/////////////////////////////
  loan = () => {
    const message = this.createClientMessage("Loans");
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/fees/loans"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/ad-mission-india/engineering/fees/loans</p></a>);
    this.addMessageToState(message);
    this.addMessageToState(a);
  };
  //////////////////tution fees/////////////////////////////
  tutionfeesmessage = () => {
    const message=this.createClientMessage("Tuition Fees");
    const message1= this.createChatBotMessage(
      "FEES STRUCTURE UG Programs KATTANKULATHUR CAMPUS  ");
      const message2 = this.createChatBotMessage("Bio-Engineering - 2.5 lakhs Architechture - 2.75 lakhs Nanotechnology - 3.75 lakhs Civil Engineering - 2.5 lakhs Interior Designing- 1.5 lakhs Electrical Engineering-2.5 lakhs Computer Science - 2.5-3.5 lakhs Electronics Engineering -2.5 lakhs Mechanical Engineering-2.5 lakhs Aerospace Engineering-3.75lakhs",
      {
        widget: "tutionfees",
      }
    );
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };
  tutionfees = () => {
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/tuition-fee#0"
    );
  };
 
  ///////////////////////////transport fees////////////////////
  transportfeesmessage = () => {
    const message1=this.createClientMessage("Transport Fees");
    const message = this.createChatBotMessage(
      <p>Air conditioned college buses will be operated from limited parts of Chennai city.
        Online Bus Booking Mode is also available (Except First Year)Bus Fee Rs. 50,000/- Demand Draft in favour of SRMIST payable at Chennai.
        The fees will be accepted subject to the availability of seats.Bus fees once paid will not be refunded / adjusted under any circumstances.</p>,
      {
        widget: "transportfees",
      }
    
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   transportfees = () => {
    const message = this.createClientMessage("Transport Fees");
    this.addMessageToState(message);
    window.open(
      "https://www.srmist.edu.in/admission-india/engineering/fees/transport-fee"
    );
  };
  //////////////////////Hostel////////////////////////////////////
  hostel = () => {
    const message1 = this.createClientMessage("Hostel");
    const message = this.createChatBotMessage(
      "What do you want to know about?",
      {
        widget: "hostelQues",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

   
  //////////////////////////////hostel fees///////////////////////////
  hostelfeesmessage = () => {
    const message1=this.createClientMessage("Hostel Fees");
    const message = this.createChatBotMessage(
      "Boy's Hostel (AC) - 2.18k-2.28k   Boy's Hostel (Non-AC) - 92k-1.33k Girl's Hostel (AC) - 2.13k-2.38k  Girl's Hostel (Non-AC) - 1.025k-1.43k",
      {
        widget: "hostelfees",
      }
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelfees = () => {
    
    window.open(
      "https://www.srmist.edu.in/hostel-fee-structure-academic-year-2020-21-first-year-students-boys-girls"
    );
  };
 ////////////////////////////////hostel questions////////////////////////////////////
  hostelQues1 = () => {
    const message1=this.createClientMessage("What room furnishings are provided by the hostel?");
    const message = this.createChatBotMessage(
      "The rooms come equipped with a table, chair, cot and a cupboard for each student. All the rooms are triple sharing with 2 fans and sufficient sockets. A big sized mirror is provided in each room."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelQues2 = () => {
    const message1=this.createClientMessage("What necessary items must students bring to the hostel?");
    const message = this.createChatBotMessage(
      "The bed and bathroom accessories, such as mattresses, pillows, bed covers, buckets, mugs etc., need to be purchased by the students. The students can purchase the same at the University shops within the campus."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelQues3 = () => {
    const message1=this.createClientMessage("What are the facilities available for the students in the hostel");
    const message = this.createChatBotMessage(
      "Each hostel block has a R.O. Plant and Solar Heater. Hence pure drinking water and hot water for bath are available. The hostels are Wi-Fi enabled."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelQues4 = () => {
    const message1=this.createClientMessage("What are the recreational facilities available in the hostel?");
    const message = this.createChatBotMessage(
      "There are separate ‘Gymnasiums’ for Boys hostel and Girls hostel. In addition to the above, sports materials such as Cricket Bats, Shuttlecocks, Throw balls, Volley balls and Indoor games are available in each block. Movies are arranged periodically at the common area of the hostels (or) University open auditorium. Student activity centre and incubation centers are available in the University Complex."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelQues5 = () => {
    const message1=this.createClientMessage("What are the Hostel Mess facilities?");
    const message = this.createChatBotMessage(
      "The Hostel Mess is run by the management. Menu will be displayed on the notice board. Changes to the menu can be made through the Mess Committee. In addition to the Mess service, Canteens and Food courts are also available for students’ use."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  hostelQues6 = () => {
    const message1=this.createClientMessage("Is there a laundry Service available in the hostel?");
    const message = this.createChatBotMessage(
      "SRM Hostel provides laundry and dry cleaning service to the hostellers. Equipped with state-of-the art machinery, every kind of cloth and fabric can be serviced."
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  ////////////////////Biotechnology Questions/////////////////////////////////////
    bio = () => {
    const message1=this.createClientMessage("School Of Bio-Engineering")
    const message = this.createChatBotMessage("School Of Bio-Engineering:", {
      widget: "bio",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  bio1 = () => {
    const message1=this.v=this.createClientMessage("Biomedical Engineering (BME)")
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur- 120\n Ramapuram- 60\n Vadapalani- 0 NCR- 0\n Amravati-0\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  bio2 = () => {
    const message1=this.v=this.createClientMessage("Biotechnology")
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-240\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  bio3 = () => {
    const message1=this.v=this.createClientMessage("Biomedical W/S in Genetic Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  bio4 = () => {
    const message1=this.v=this.createClientMessage("Biomedical W/S in Regenerative Medicine");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  bio5 = () => {
    const message1=this.v=this.createClientMessage("Biomedical with specialization in Cancer Genetics");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-30\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  bio6 = () => {
    const message1=this.v=this.createClientMessage("Chemical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-90\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

////////////////////////Architecture Questions//////////////////////////////////
  arch = () => {
    const message1=this.createClientMessage("School Of Architechture & Interior Design")
    const message = this.createChatBotMessage(
      "School Of Architechture & Interior Design:",
      {
        widget: "arch",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  arc1 = () => {
    const message1=this.createClientMessage("B.Arch-Architecture");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-80\n Ramapuram-80\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  arc2 = () => {
    const message1=this.createClientMessage("B.Des-Interior Design");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-60\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  ////////////////////////////////Computing Questions///////////////////////////////////
  comp = () => {
    const message1=this.createClientMessage("School Of Computing");
    const message = this.createChatBotMessage("School Of Computing:", {
      widget: "cse",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  comp1 = () => {
    const message1=this.createClientMessage("Artificial Intelligence");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp2 = () => {
    const message1=this.createClientMessage("Computer Science and Business Systems(in partnership with TCS");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-60\n Vadapalani-60\n NCR-30\n Amravati-0\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp3 = () => {
    const message1=this.createClientMessage("Computer Science and Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-780\n Ramapuram-600\n Vadapalani-120\n NCR-420\n Amravati-240\n Haryana-120\n Sikkim-60"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp4 = () => {
    const message1=this.createClientMessage("CSE and Big Data Analytics");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-180\n Ramapuram-120\n Vadapalani-60\n NCR-60\n Amravati-90\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp5 = () => {
    const message1=this.createClientMessage("CSE W/S in Artificial Intelligence and Machine Learning");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-180\n Ramapuram-180\n Vadapalani-60\n NCR-120\n Amravati-120\n Haryana-0\n Sikkim-60"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp6 = () => {
    const message1=this.createClientMessage("CSE W/S in Data Science & Artificial Intelligence(in association with IBM");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-150\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp7 = () => {
    const message1=this.createClientMessage("CSE W/S in Blockchain Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp8 = () => {
    const message1=this.createClientMessage("CSE W/S in Blockchain&IoT(in association with IBM)");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp9 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud Computing");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-60\n Amravati-30\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp10 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud Engineering and DevOps Automation(in association with Xebia)");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp11 = () => {
    const message1=this.createClientMessage("CSE W/S in Computer Networking");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp12 = () => {
    const message1=this.createClientMessage("CSE W/S in Cyber Security");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-180\n Ramapuram-120\n Vadapalani-0\n NCR-60\n Amravati-90\n Haryana-0\n Sikkim-60"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp13 = () => {
    const message1=this.createClientMessage("CSE W/S in Gaming Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp14 = () => {
    const message1=this.createClientMessage("CSE W/S in Internet of things");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-60\n Vadapalani-0\n NCR-0\n Amravati-30\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp15 = () => {
    const message1=this.createClientMessage("CSE with software Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp16 = () => {
    const message1=this.createClientMessage("CSE W/S in Cloud and Mobile Based Applications (in association with IBM)");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp17 = () => {
    const message1=this.createClientMessage("CSE W/S in Information Technology");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp18 = () => {
    const message1=this.createClientMessage("CSE with specilization in Financial Technologies");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  comp19 = () => {
    const message1=this.createClientMessage("Information Techonology");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-180\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  

  ////////////////////////////Mechanical Questions////////////////////////////////
  mech = () => {
    const message1=this.createClientMessage("School Of Mechanical-Engineering");
    const message = this.createChatBotMessage(
      "School Of Mechanical-Engineering:",
      {
        widget: "mech",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  mech1 = () => {
    const message1=this.createClientMessage("Aerospace Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech2 = () => {
    const message1=this.createClientMessage("Automobile Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-30\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech3 = () => {
    const message1=this.createClientMessage("Automobile Engineering w/s in Vehicle Testing");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-30\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech4 = () => {
    const message1=this.createClientMessage("Automobile with specialisation in Automation Electronics");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech5 = () => {
    const message1=this.createClientMessage("Mechanical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-540\n Ramapuram-120\n Vadapalani-12\n NCR-60\n Amravati-20\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech6 = () => {
    const message1=this.createClientMessage("Mechanical and Automation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-60\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  mech7 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s in Artificial Intelligence and Machine Learning");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-12\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech8 = () => {
    const message1=this.createClientMessage("Mechanical Engineering with specialisation in Robotics/Mechtronics");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech9 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Additive Manufacturing");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech10 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Advanced Materials");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech11 = () => {
    const message1=this.createClientMessage("Mechanical Engineering w/s Automative Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  mech12 = () => {
    const message1=this.createClientMessage("Mechatronics Engineer");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  
  mech13 = () => {
    const message1=this.createClientMessage("Mechatronics Engineering with specialisation in Robotics");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };


  ////////////////////////////CHEMICAL Questions////////////////////////////
  chem = () => {
    const message1= this.createClientMessage("School Of Chemical & Material Engineering");
    const message = this.createChatBotMessage(
      "School Of Chemical & Material Engineering:",
      {
        widget: "chem",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  chem1 = () => {
    const message1=this.createClientMessage("Nanotechnology");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-30\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
 

  //////////////////////////CIVIL Questions///////////////////////////////
  civil = () => {
    const message1=this.createClientMessage("School Of Civil Engineering");
    const message = this.createChatBotMessage("School Of Civil Engineering:", {
      widget: "civil",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  civil1 = () => {
    const message1=this.createClientMessage("Civil Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-180\n Ramapuram-120\n Vadapalani-0\n NCR-30\n Amravati-30\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  civil2 = () => {
    const message1=this.createClientMessage("Civil Engineering with Computer Application");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  civil3 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Structural Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  civil4 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Geotechnical Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  civil5 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Transportation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  civil6 = () => {
    const message1=this.createClientMessage("Civil Engineering w/s Water Resources and Environmental Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-GREEN\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
 

  ////////////////////////ELECTRICAL & ELECTRONICS Questions///////////////////////
  eee = () => {
    const message1=this.createClientMessage("School Of Electrical & Electronics Engineering");
    const message = this.createChatBotMessage(
      "School Of Electrical & Electronics Engineering:",
      {
        widget: "eee",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  eee1 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-240\n Ramapuram-60\n Vadapalani-0\n NCR-60\n Amravati-30\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee2 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s E-Mobility");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee3 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s Smart Grid");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee4 = () => {
    const message1=this.createClientMessage("Electrical and Electronics Engineering w/s Energy Efficient Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-10\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee5 = () => {
    const message1=this.createClientMessage("Electrical and Computer Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee6 = () => {
    const message1=this.createClientMessage("Electronics and Communication Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-660\n Ramapuram-240\n Vadapalani-60\n NCR-120\n Amravati-120\n Haryana-60\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee7 = () => {
    const message1=this.createClientMessage("Electronics and Computer Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-120\n Ramapuram-60\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee8 = () => {
    const message1=this.createClientMessage("ECE W/S in Cyber Physical Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amaravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee9 = () => {
    const message1=this.createClientMessage("ECE W/S Data Science");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-60\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee10 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s VLSI & Embedded Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-40\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee11 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s Advanced Communication Systems");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-40\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee12 = () => {
    const message1=this.createClientMessage("Electrical and Communication Engineering w/s Signal/Image Processing using AI");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-0\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-40\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  eee13 = () => {
    const message1=this.createClientMessage("Electrical and Instrumentation Engineering");
    const message = this.createChatBotMessage(
      "Available Seats:\n Kattankulathur-60\n Ramapuram-0\n Vadapalani-0\n NCR-0\n Amravati-0\n Haryana-0\n Sikkim-0"
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };



  ////////////////////////////Placements////////////////////////

  placement = () => {
    const message1=this.createClientMessage("Placements")
    const message = this.createChatBotMessage(
      "Within Placements:",
      {
        widget: "placement",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  placement_about = () => {
    var s= new String("|");
    const message1=this.createClientMessage("About Placements")
    const message = this.createChatBotMessage(
      "SRM Institute of Science and Technology (formerly known as SRM University) attracts over 450+ recruiters from various domains of companies providing a wide range of opportunities through: ",
      
    );
    const message2 = this.createChatBotMessage(
      "SuperDream&Dream Companies Top Product companies | |  Market leaders in IT Companies  Specialized Training programs   Internships with top corporates Leading Core Engineering Companies",
      {
        widget: "placement_about",
      }
      
    );
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };
  placement_act = () => {
    const message1=this.createClientMessage("Placement Activities")
    const message = this.createChatBotMessage(
      "PROFESSIONAL ENRICHMENT AND EXTENSION ACTIVITIES",
      
    );
    const message2 = this.createChatBotMessage(
      " Professional skills for Nigerian students   |    Career guidance programme for high school students (April, every year)  |    Communication skill for Japanese delegates (every year)   |   Employability skills training",
      {
        widget: "placement_act",
      }
    );
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };
  placement_mile = () => {
    const message1=this.createClientMessage("Placement Milestones")
    const message = this.createChatBotMessage(
      "Record number of 4751 Offers by Day1 Recruiters (TCS, Cognizant, Infosys & Wipro) for 2020 Batch. 600 companies offered 6777 offers  |  Record number of 200 plus new recruiters  |  Highest Package - 41.6 Lpa by Microsoft   |   Excellent opportunities for female students  - Shell India, Saint Gobain,have conducted exclusive recruitment drive",
      
    );
    const message2 = this.createChatBotMessage(
      "SRM IST is a nodal centre for all the 3 services of Indian Armed Forces   ||   Super Dream companies (Rs.10 L Pa + salary packages) include Google, Microsoft, Aruba Networks among others  || Dream companies (Rs.5 L Pa + salary packages) include  Deloitte, Capgemini among others",
      {
        widget: "placement_mile",
      }
    );
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };
  placement_about_know_more = () => {
    const message1=this.createClientMessage("About Placement");
    this.addMessageToState(message1);
    window.open(
      "https://www.srmist.edu.in/placement/about"
    );
  };
  placement_act_know_more = () => {
    const message1=this.createClientMessage("Placement Activities");
    this.addMessageToState(message1);
    window.open(
      "https://www.srmist.edu.in/placement/activities"
    );
  };
  placement_mile_know_more = () => {
    const message1=this.createClientMessage("Placement Milestones");
    this.addMessageToState(message1);
    window.open(
      "https://www.srmist.edu.in/placement/milestones"
    );
  };
  placement_rec = () => {
    const message1=this.createClientMessage("Recruiters");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/placement/recruiters"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/placement/recruiters</p></a>);
    this.addMessageToState(a);
  };
  placement_contact = () => {
    const message1=this.createClientMessage("Placement Contact");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/placement/contacts"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/placement/contacts</p></a>);
    this.addMessageToState(a);
    
  };
  
  /////////////////////////no yes return messages///////////////////////////
  nomessage = () => {
    // const message1=this.createClientMessage("No");
    const message = this.createChatBotMessage(
      "Thank you for connecting with us!!"
    );
    const message2 = this.createChatBotMessage(
      "For further details, we kindly request you to get in touch with SRM Info Center. 044-47437500 / 044-27455510 Always glad to help you!"
    );
    // this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  yesmessage = () => {
    const message1 = this.createClientMessage("Yes");
    const message = this.createChatBotMessage(
      "Within SRM:",
      {
        widget: "overview",
      }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
