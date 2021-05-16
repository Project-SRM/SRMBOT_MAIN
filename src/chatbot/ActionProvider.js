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
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3); 
  };
  postgrad = () => {
    const message = this.createClientMessage("Post Graduate");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in/</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);    
  };
  international = () => {
    const message = this.createClientMessage("International");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-international/content/faqs#"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/ad-mission-international/content/faqs#</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);    
  };
  events = () => {
    const message = this.createClientMessage("Events");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/events-archive/2021"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/events-archive/2021</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);  
  };
  research = () => {
    const message = this.createClientMessage("Research");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/research/research-details"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/re-search/research-details</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
  };
  campus = () => {
    
    const message = this.createClientMessage("Campus Life");
    this.addMessageToState(message);

    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/campus/campus"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/ca-mpus/campus</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
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
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
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
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
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
  handleprograms_post = () => {
    const message1 = this.createClientMessage("Post Graduate");
    
    const message = this.createChatBotMessage(
      "May I know which stream are you interested in",
      {
        widget: "programs_post",
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

  /////////////______MANAGEMENT___________//////////////

  management_courses = () => {
    const message1 = this.createClientMessage("Science and Humanities");
    const message = this.createChatBotMessage("Within Science and Humanities :",
    {
      widget: "S_and_H_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  management_courses1 = () => {
    const message1 = this.createClientMessage("English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses2 = () => {
    const message1 = this.createClientMessage("English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses3 = () => {
    const message1 = this.createClientMessage("English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses4 = () => {
    const message1 = this.createClientMessage("English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };

  /////////////______HOTEL_MANAGEMENT___________//////////////

  hotel_management_courses = () => {
    const message1 = this.createClientMessage("Hotel Management");
    const message = this.createChatBotMessage("Within hotel management :",
    {
      widget: "Hotel_Management_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  hotel_management_courses1 = () => {
    const message1 = this.createClientMessage("Diploma in Hotel Management");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 100 | Fees/year :- 55k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- A Pass in SSLC ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  hotel_management_courses2 = () => {
    const message1 = this.createClientMessage("B.Sc. In Hotel & Catering Management");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 300 | Fees/year :- 80k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) Any Group. (Minimum aggregate of 35%)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };

  /////////////______HOTEL_MANAGEMENT___________//////////////

  ////////_________MAnagement_post_______//////////

  management_courses_post = () => {
    const message1 = this.createClientMessage("Management");
    const message = this.createChatBotMessage("Within Management :",
    {
      widget: "Management_Courses_Post",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  management_courses_post1 = () => {
    const message1 = this.createClientMessage("M.B.A. - Business Administration");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 240 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post2 = () => {
    const message1 = this.createClientMessage("M.B.A. - Hospital Management");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post3 = () => {
    const message1 = this.createClientMessage("M.B.A. - Waste Management and Social Entrepreneurship");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post4 = () => {
    const message1 = this.createClientMessage("MBA- Banking and Financial Service");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post5 = () => {
    const message1 = this.createClientMessage("MBA- Data Science");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post6 = () => {
    const message1 = this.createClientMessage("MBA- Digital Marketing");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses_post7 = () => {
    const message1 = this.createClientMessage("M.B.A - Business Analytics");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 3.5L-3.75L  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- * A Bachelor's degree with minimum aggregate of 50% * Students should have appeared for any one of the nationally recognized entrance tests (CAT/TANCET/XAT/MAT/GMAT/-NMAT/CMAT) or SRM Joint Entrance Exam (SRMJEE-M) * Professionals with less than 2 years of work experience and less than 26 years age may also apply if they qualify the above two eligibility criteria. * Students with Diploma and UGC recognised Distance education degrees will have to mandatorily undertake test conducted by SRM IST and score a min of 60%");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };

  ///////__________Management_post_______/////////

  /////////////______MANAGEMENT___________//////////////

  management_courses = () => {
    const message1 = this.createClientMessage("Management");
    const message = this.createChatBotMessage("Within Management :",
    {
      widget: "Management_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  management_courses1 = () => {
    const message1 = this.createClientMessage("B.B.A. - Business Administration");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 270 | Fees/year :- 100k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- A Pass in Higher Secondary Examination or Equivalent (Academic or Vocational Stream ) with a Minimum eligibility of aggregate of 50% in +2 (Preference will be given to students without any break in study and students who secures aggregate of 60 % of Marks in +2)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses2 = () => {
    const message1 = this.createClientMessage("B.B.A. (Hons.)- Business Administration");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 25 | Fees/year :- 125k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- A Pass in Higher Secondary Examination or Equivalent (Academic or Vocational Stream ) with a Minimum eligibility of aggregate of 60% in +2.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses3 = () => {
    const message1 = this.createClientMessage("B.B.A. - Rural Management");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 10 | Fees/year :- 100k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- A Pass in Higher Secondary Examination or Equivalent (Academic or Vocational Stream ) with a Minimum eligibility of aggregate of 50% in +2 (Preference will be given to students without any break in study and students who secures aggregate of 60 % of Marks in +2)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  management_courses4 = () => {
    const message1 = this.createClientMessage("B.B.A. - Digital Marketing");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 25 | Fees/year :- 100k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- A Pass in Higher Secondary Examination or Equivalent (Academic or Vocational Stream ) with a Minimum eligibility of aggregate of 50% in +2 (Preference will be given to students without any break in study and students who secures aggregate of 60 % of Marks in +2)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };

  /////////////______MANAGEMENT___________//////////////

  ////////////______MED_COURSES_POST______/////////
  med_courses_post = () => {
    const message1 = this.createClientMessage("Medicine & Health Science");
    const message = this.createChatBotMessage("Within Medicine & Health Science:",
    {
      widget: "Med_Courses_post",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post1 = () => {
    const message1 = this.createClientMessage("SRM Medical College Hospital and Research Centre ");
    const message = this.createChatBotMessage("Within SRM Medical College Hospital and Research Centre :",
    {
      widget: "Med_Courses_post1",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post2 = () => {
    const message1 = this.createClientMessage("SRM Kattankulathur Dental College and Hospital");
    const message = this.createChatBotMessage("Within SRM Kattankulathur Dental College and Hospital",
    {
      widget: "Med_Courses_post2",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post3 = () => {
    const message1 = this.createClientMessage("SRM Ramapuram Dental College ");
    const message = this.createChatBotMessage("Within SRM Ramapuram Dental College :");
    const a=this.createChatBotMessage(<a href="https://srmrmp.edu.in/"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://srmrmp.edu.in/</p></a>
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(a);
  };
  med_courses_post4 = () => {
    const message1 = this.createClientMessage("Health Sciences");
    const message = this.createChatBotMessage("Within Health Sciences :",
    {
      widget: "Med_Courses_post4",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post5 = () => {
    const message1 = this.createClientMessage("Other Courses Offered ");
    const message = this.createChatBotMessage("Within Other Courses Offered :",
    {
      widget: "Med_Courses_post5",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post5_1 = () => {
    const message1 = this.createClientMessage("Clinical Psychology");
    const message = this.createChatBotMessage("Within Clinical Psychology :",
    {
      widget: "Med_Courses_post5_1",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);};
    med_courses_post5_2 = () => {
      const message1 = this.createClientMessage("Audiology and Speech Language Pathology");
      const message = this.createChatBotMessage("Within Audiology and Speech Language Pathology :",
      {
        widget: "Med_Courses_post5_2",
      }
      );
     
      this.addMessageToState(message1);
      this.addMessageToState(message);};
  med_courses_post1_1 = () => {
    const message1 = this.createClientMessage("Non Clinical Courses");
    const message = this.createChatBotMessage("Within Non Clinical Courses :",
    {
      widget: "Med_Courses_post1_1",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post1_2 = () => {
    const message1 = this.createClientMessage("Clinical Courses");
    const message = this.createChatBotMessage("Within Clinical Courses :",
    {
      widget: "Med_Courses_post1_2",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post1_3 = () => {
    const message1 = this.createClientMessage("Super Speciality");
    const message = this.createChatBotMessage("Within Super Speciality :",
    {
      widget: "Med_Courses_post1_3",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
   med_courses_post4_1 = () => {
    const message1 = this.createClientMessage("Nursing");
    const message = this.createChatBotMessage("Within Nursing:",
    {
      widget: "Med_Courses_post4_1",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post4_1_1 = () => {
    const message1 = this.createClientMessage("Master of Science (M.Sc.)");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1.B.Sc. Nursing with one year Experience. 2.Post Basic B.Sc.(N) with one year Experience is required ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_1_2 = () => {
    const message1 = this.createClientMessage("Medical-Surgical");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:-1. Post Basic B.Sc.(N) with one year Experience is required");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_1_3 = () => {
    const message1 = this.createClientMessage("Obstetrics & Gynaecology");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1. Post Basic B.Sc.(N) with one year Experience is required");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_1_4 = () => {
    const message1 = this.createClientMessage("Community Health");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:-1. Post Basic B.Sc.(N) with one year Experience is required");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_1_5 = () => {
    const message1 = this.createClientMessage("Psychiatric");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1. Post Basic B.Sc.(N) with one year Experience is required");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_1_6 = () => {
    const message1 = this.createClientMessage("Paediatric");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1. Post Basic B.Sc.(N) with one year Experience is required");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post4_2 = () => {
    const message1 = this.createClientMessage("Physiotherapy");
    const message = this.createChatBotMessage("Within Physiotherapy:",
    {
      widget: "Med_Courses_post4_2",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post4_3 = () => {
    const message1 = this.createClientMessage("Occupational Therapy");
    const message = this.createChatBotMessage("Within Occupational Therapy:",
    {
      widget: "Med_Courses_post4_3",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post4_3_1 = () => {
    const message1 = this.createClientMessage("Master of Occupational Therapy");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Candidates completed Bachelors in Occupational Therapy (B.O.T) including Six months of Internship.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);};
    
  med_courses_post4_5 = () => {
      const message1 = this.createClientMessage("Public Health");
      const message = this.createChatBotMessage("Within Public Health :",
      {
        widget: "Med_Courses_post4_5",
      }
      );
     
      this.addMessageToState(message1);
      this.addMessageToState(message);
    };
    med_courses_post4_5_1 = () => {
      const message1 = this.createClientMessage("Master of Public Health - MPH");
      const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
      );
      const message2 = this.createChatBotMessage("Eligibility:- Graduates who have a pass in MBBS, Ayush, Engineering, Pharmacy, Physiotherapy, Occupational Therapy, Dentistry, Nursing, Veterinary Sciences. Arts & Science graduates with a minimum of 55% aggregate are eligible to apply. ");
     
      this.addMessageToState(message1);
      this.addMessageToState(message);
      this.addMessageToState(message2);
    };
    med_courses_post4_5_2 = () => {
      const message1 = this.createClientMessage("M.Sc. Biostatistics and Epidemiology");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4250 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Graduates who have a pass in MBBS, Ayush, Engineering, Pharmacy, Physiotherapy, Occupational Therapy, Dentistry, Nursing, Veterinary Sciences. Arts & Science graduates with a minimum of 55% aggregate are eligible to apply.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    };
    med_courses_post4_5_3 = () => {
      const message1 = this.createClientMessage("Master of Health Data Science");
    const message = this.createChatBotMessage(" KTR :-  Fees- 4300 | Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- The applicants would have to go through a process of Selection Test for admission to the MSc Program. The Selection Test would include an Aptitude test/ Written essay and or an Interview. Admission to the MSc course would be based on candidates’ Selection Test score, the previous academic performance, relevant work experience and participation in extracurricular activities.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);};
    med_courses_post5_1_1 = () => {
      const message1 = this.createClientMessage("M. Phil");
    const message = this.createChatBotMessage(" KTR :-  Duration :-2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Minimum educational requirement for admission to this course will be M.A./M.Sc. degree in Psychology from a university recognized by the UGC with a minimum of 55% marks in aggregate, preferably with special paper in Clinical Psychology. For SC/ST/OBC category, minimum of 50% marks in aggregate is essential, as per GOI.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);};
    
    med_courses_post5_2_1 = () => {
      const message1 = this.createClientMessage("M.Sc. Speech Language Pathology (M.Sc. SLP) ");
    const message = this.createChatBotMessage("Seats Available in KTR :- 12 | Duration :- 2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- This is handled by the Director of Admissions, SRM Institute of Science and Technology.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);};
    
    med_courses_post5_2_2 = () => {
      const message1 = this.createClientMessage("M.Sc. Audiology (M.Sc Aud)");
    const message = this.createChatBotMessage("Seats Available in KTR :- 12 | Duration :- 2yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- This is handled by the Director of Admissions, SRM Institute of Science and Technology.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);};
    

  /////____Non_Clinical_Courses____///
  med_courses_post1_1_1 = () => {
    const message1 = this.createClientMessage("Anatomy");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 04 | Fees- 3L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_2 = () => {
    const message1 = this.createClientMessage("Physiology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 04 | Fees- 3L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_3 = () => {
    const message1 = this.createClientMessage("Biochemistry");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 02 | Fees- 3L |   Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_4 = () => {
    const message1 = this.createClientMessage("Pharmacology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 04 | Fees- 3L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_5 = () => {
    const message1 = this.createClientMessage("Pathology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 04 | Fees- 10L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_6 = () => {
    const message1 = this.createClientMessage("Microbiology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 03 | Fees- 3L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_1_7 = () => {
    const message1 = this.createClientMessage("Community Medicine");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 04 | Fees- 7L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  /////____Non_Clinical_Courses____///

  /////____Clinical_Courses____///
  med_courses_post1_2_1 = () => {
    const message1 = this.createClientMessage("General Medicine");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-14 , NRI-01 | Fees- 40L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_2 = () => {
    const message1 = this.createClientMessage("Paediatrics");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-01 | Fees- 40L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_3 = () => {
    const message1 = this.createClientMessage("Psychiatry");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-03 , NRI-00 | Fees- 30L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_4 = () => {
    const message1 = this.createClientMessage("Dermatology, Venerology and Leprosy");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-03 , NRI-01 | Fees- 50L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_5 = () => {
    const message1 = this.createClientMessage("Respiratory Medicine");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-04 , NRI-00 | Fees- 30L |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_6 = () => {
    const message1 = this.createClientMessage("Radio Diagnosis");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-04 , NRI-01 | Fees- 50L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_7 = () => {
    const message1 = this.createClientMessage("Anaesthesiology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-09 , NRI-00 | Fees- 30L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_8 = () => {
    const message1 = this.createClientMessage("Obstetrics & Gynaecology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-04 , NRI-01 | Fees- 50L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_9 = () => {
    const message1 = this.createClientMessage("General Surgery");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-11 , NRI-01 | Fees- 35L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_10 = () => {
    const message1 = this.createClientMessage("Orthopaedics");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-04 , NRI-01 | Fees- 50L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_11 = () => {
    const message1 = this.createClientMessage("Ophthalmology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-03 , NRI-00 | Fees- 30L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_2_12 = () => {
    const message1 = this.createClientMessage("Otorhinolaryngology (ENT)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-04 , NRI-00 | Fees- 30L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in MBBS or its equivalent degree recognized by Medical Council of India . Eligible NEET PG Score as prescribed by MCI. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  /////____Clinical_Courses____///

  ////__Super_Speciality___////
  med_courses_post1_3_1 = () => {
    const message1 = this.createClientMessage("Cardiology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-03 , NRI-00 | Fees- 18L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MD - General Medicine / MD - Paediatrics ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
  med_courses_post1_3_2 = () => {
    const message1 = this.createClientMessage("Nephrology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-02 , NRI-00 | Fees- 18L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MD - General Medicine / MD - Paediatrics ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
   
  med_courses_post1_3_3 = () => {
    const message1 = this.createClientMessage("Neurology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 18L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MD - General Medicine / MD - Paediatrics ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
   
  med_courses_post1_3_4 = () => {
    const message1 = this.createClientMessage("Cardio Vascular & Thoracic Surgery");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 10L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MS - General Surgery / DNB Surgery");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
  med_courses_post1_3_5 = () => {
    const message1 = this.createClientMessage("Neurosurgery");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 10L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MS - General Surgery");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_3_6 = () => {
    const message1 = this.createClientMessage("Plastic & Reconstructive Surgery");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 10L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MS - General Surgery");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_3_7 = () => {
    const message1 = this.createClientMessage("Paediatric Surgery");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 10L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MS - General Surgery / DNB Surgery");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post1_3_8 = () => {
    const message1 = this.createClientMessage("Urology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- Domestic-01 , NRI-00 | Fees- 22L | Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- MS - General Surgery / MD (or) MS Obstetrics and Gynaecology");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
  ////__Super_Speciality___////

  med_courses_post2_1 = () => {
    const message1 = this.createClientMessage("MDS Conservative Dentistry and Endodontics");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 12L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_2 = () => {
    const message1 = this.createClientMessage("MDS Oral and Maxillofacial Surgery ");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 12L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_3 = () => {
    const message1 = this.createClientMessage("MDS Orthodontics & Dento Facial Orthopaedics");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 12L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_4 = () => {
    const message1 = this.createClientMessage("MDS Periodontology");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 8L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_5 = () => {
    const message1 = this.createClientMessage("MDS Pediatric and Preventive Dentistry");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 10L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_6 = () => {
    const message1 = this.createClientMessage("MDS Prosthodontics and Crown & Bridge");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 3 | Fees/year :- 8L  |  Duration :-3yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Pass in B.D.S. or Its equivalent degree recognized by Dental Council of India (Completion of internship on or before 31.03.2020). Eligible NEET PG Score as prescribed by DGHS.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses_post2_7 = () => {
    const message1 = this.createClientMessage("Oral and Maxillofacial Pathology ");
    const message = this.createChatBotMessage("Within Oral and Maxillofacial Pathology ",
    
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses_post2_8 = () => {
    const message1 = this.createClientMessage("Public Health Dentistry");
    const message = this.createChatBotMessage("Within Public Health Dentistry",
    
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };


  ////////////______MED_COURSES_POST______/////////

  ////////////_______MED_COURSES__________///////////
  med_courses = () => {
    const message1 = this.createClientMessage("Medicine & Health Science");
    const message = this.createChatBotMessage("Within Medicine & Health Science:",
    {
      widget: "Med_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses1 = () => {
    const message1 = this.createClientMessage("SRM Medical College Hospital and Research Centre ");
    const message = this.createChatBotMessage("Within SRM Medical College Hospital and Research Centre :",
    {
      widget: "Med_Courses1",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses2 = () => {
    const message1 = this.createClientMessage("SRM Kattankulathur Dental College and Hospital");
    const message = this.createChatBotMessage("Within SRM Kattankulathur Dental College and Hospital",
    {
      widget: "Med_Courses2",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses3 = () => {
    const message1 = this.createClientMessage("SRM Ramapuram Dental College ");
    const message = this.createChatBotMessage("Within SRM Ramapuram Dental College :");
    const a=this.createChatBotMessage(<a href="https://srmrmp.edu.in/"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://srmrmp.edu.in/</p></a>
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(a);
  };
  med_courses4 = () => {
    const message1 = this.createClientMessage("Health Sciences");
    const message = this.createChatBotMessage("Within Health Sciences :",
    {
      widget: "Med_Courses4",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses5 = () => {
    const message1 = this.createClientMessage("Other Courses Offered ");
    const message = this.createChatBotMessage("Within Other Courses Offered :",
    {
      widget: "Med_Courses5",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses1_1 = () => {
    const message1 = this.createClientMessage("Bachelor of Medicine and Bachelor of Science(MBBS)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 150 | Fees/year :- 22.5L  |  Duration :- 4 & 1/2yrs + 1yr(internship) "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1.Minimum age must be 17 yrs. || 2. H.S.C / (+2) or equivalent qualification with English, Physics, Chemistry and Biology/Botany & Zoology with minimum marks as per MCI norms || 3. Eligible NEET (UG) score as prescribed by MCI ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  med_courses2_1 = () => {
    const message1 = this.createClientMessage("Bachelor of Dental Surgery(BDS)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 100 | Fees/year :- 22.5L  |  Duration :- 4yrs + 1yr(internship) "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1.Minimum age must be 17 yrs. || 2. H.S.C / (+2) or equivalent qualification with English, Physics, Chemistry and Biology/Botany & Zoology with minimum marks as per DCI norms || 3. Eligible NEET (UG) score as prescribed by DGHS ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2); }
  ////////////_______MED_COURSES__________///////////

  ////////////_____HEALTH_SCIENCES_______///////////
  
  med_courses4_1 = () => {
    const message1 = this.createClientMessage("Nursing");
    const message = this.createChatBotMessage("Within Nursing :",
    {
      widget: "Med_Courses4_1"
    });
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses4_2 = () => {
    const message1 = this.createClientMessage("Physiotherapy");
    const message = this.createChatBotMessage("Within Physiotherapy :",
    {
      widget: "Med_Courses4_2",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses4_3 = () => {
    const message1 = this.createClientMessage("Occupational Therapy");
    const message = this.createChatBotMessage("Within Occupational Therapy :",
    {
      widget: "Med_Courses4_3",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses4_4 = () => {
    const message1 = this.createClientMessage("Pharmacy");
    const message = this.createChatBotMessage("Within pharmacy :",
    {
      widget: "Med_Courses4_4",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  med_courses4_5 = () => {
    const message1 = this.createClientMessage("Public Health");
    const message = this.createChatBotMessage("Within Public Health :",
    {
      widget: "Med_Courses4_5",
    }
    );
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  ////////////_____HEALTH_SCIENCES_______///////////
 
   ///////_______Nursing_____////////
   
  med_courses4_1_1 = () => {
    const message1 = this.createClientMessage("Bachelor of Science (B.Sc.)");
    const message = this.createChatBotMessage(" KTR :- Duration :- 4yrs | Fees/year :- 75,000 "
    );
    const message2 = this.createChatBotMessage("Eligibility:- +2 or equivalent passed with 45% marks in Physics, Chemistry and Biology or Botany, Zoology and English ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses4_1_2 = () => {
    const message1 = this.createClientMessage("Post Basic Bachelor of Science (P.B. B.Sc)");
    const message = this.createChatBotMessage(" KTR :- Duration :- 2yrs | Fees/year :- 50,000 "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1.Diploma in Nursing 2.Should be a Registered Nurse");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses4_1_3 = () => {
    const message1 = this.createClientMessage("Diploma in General Nursing and Midwifery");
    const message = this.createChatBotMessage("KTR :- Fees/year :- 30,000  |  Duration :- 4.5yrs"
    );
    const message2 = this.createChatBotMessage("Eligibility:- 1. Minimum and Maximum age for admission will be 17 and 35 years.There is no age bar for ANM / LHV. 2. Minimum education : 10 +2 class passed preferably Science (PCB) & English with  aggregate of 40%Marks. 3.10 +2 in Arts (Mathematics, Biotechnology, Economics, Political Science, History,   Geography, Business Studies, Accountancy, Home Science, Sociology, Psychology, Philosophy) and English Core/English Elective or Health care Science - Vocational stream ONLY, passing out from recognized Board under AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board with 40 % marks. 4.10 +2 vocational ANM under CBSE Board or other equivalent board from the School and  recognized by Indian Nursing Council with 40 % marks. 5.Registered as ANM with State Nursing Registration Council. 6.Students qualified in 10 +2 Arts or Science examination or Health care Science -Vocational Stream ONLY conducted by National Institute of Open School with 40 % marks. ");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  ///////_______Nursing_____////////
  //////______Physiotherpy___/////////
  med_courses4_2_1 = () => {
    const message1 = this.createClientMessage("POs/PSOs/COs");
    // const message = this.createChatBotMessage(" KTR :- Duration :- 2yrs "
    // );
    // const message2 = this.createChatBotMessage("Eligibility:- 1.Diploma in Nursing 2.Should be a Registered Nurse");
   
    this.addMessageToState(message1);
    // this.addMessageToState(message);
    // this.addMessageToState(message2);
  };
  med_courses4_2_2 = () => {
    const message1 = this.createClientMessage("Bachelor of Physiotherapy");
    // const message = this.createChatBotMessage(" KTR :- Duration :- 2yrs "
    // );
    // const message2 = this.createChatBotMessage("Eligibility:- 1.Diploma in Nursing 2.Should be a Registered Nurse");
   
    this.addMessageToState(message1);
    // this.addMessageToState(message);
    // this.addMessageToState(message2);
  };

  //////______Physiotherpy___/////////

  med_courses4_3 = () => {
    const message1 = this.createClientMessage("Bachelor of Occupational Therapy");
    // const message = this.createChatBotMessage("KTR :- Fees/year :- 1.10 L  |  Duration :- 4.5yrs"
    // );
    // const message2 = this.createChatBotMessage("Eligibility:- 1. Minimum and Maximum age for admission will be 17 and 35 years.There is no age bar for ANM / LHV. 2. Minimum education : 10 +2 class passed preferably Science (PCB) & English with  aggregate of 40%Marks. 3.10 +2 in Arts (Mathematics, Biotechnology, Economics, Political Science, History,   Geography, Business Studies, Accountancy, Home Science, Sociology, Psychology, Philosophy) and English Core/English Elective or Health care Science - Vocational stream ONLY, passing out from recognized Board under AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board with 40 % marks. 4.10 +2 vocational ANM under CBSE Board or other equivalent board from the School and  recognized by Indian Nursing Council with 40 % marks. 5.Registered as ANM with State Nursing Registration Council. 6.Students qualified in 10 +2 Arts or Science examination or Health care Science -Vocational Stream ONLY conducted by National Institute of Open School with 40 % marks. ");
   
    this.addMessageToState(message1);
    // this.addMessageToState(message);
    // this.addMessageToState(message2);
  };
  med_courses4_4 = () => {
    const message1 = this.createClientMessage("Pharmacy");
    // const message = this.createChatBotMessage("KTR :- Fees/year :- 1.10 L  |  Duration :- 4.5yrs"
    // );
    // const message2 = this.createChatBotMessage("Eligibility:- 1. Minimum and Maximum age for admission will be 17 and 35 years.There is no age bar for ANM / LHV. 2. Minimum education : 10 +2 class passed preferably Science (PCB) & English with  aggregate of 40%Marks. 3.10 +2 in Arts (Mathematics, Biotechnology, Economics, Political Science, History,   Geography, Business Studies, Accountancy, Home Science, Sociology, Psychology, Philosophy) and English Core/English Elective or Health care Science - Vocational stream ONLY, passing out from recognized Board under AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board with 40 % marks. 4.10 +2 vocational ANM under CBSE Board or other equivalent board from the School and  recognized by Indian Nursing Council with 40 % marks. 5.Registered as ANM with State Nursing Registration Council. 6.Students qualified in 10 +2 Arts or Science examination or Health care Science -Vocational Stream ONLY conducted by National Institute of Open School with 40 % marks. ");
   
    this.addMessageToState(message1);
    // this.addMessageToState(message);
    // this.addMessageToState(message2);
  };
  med_courses4_5_1 = () => {
    const message1 = this.createClientMessage("B.Sc. Public Health");
    const message = this.createChatBotMessage("KTR :- Fees/year :- 60,000   |  Duration :- 3yrs"
    );
    const message2 = this.createChatBotMessage("Eligibility:-1. 10+2 pattern in groups such as Science, Commerce, Arts and Humanities in India/abroad. 2.Selection is based on academic merit and performance in the interview");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses5_1 = () => {
    const message1 = this.createClientMessage("Optometry");
    const message = this.createChatBotMessage("KTR :- Fees/year :- 1.25 L   |  Duration :- 3yrs & 1yr (internship) "
    );
    const message2 = this.createChatBotMessage("Eligibility:-1. Candidates should have successfully completed HSC examinations of any recognized board / university of India or equivalent of 10+2 education in India or abroad with minimum of 60% marks. 2.The eligible subjects at the HSC or equivalent: In combination with Physics, Mathematics and Chemistry with either Biology or Computer Science");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  med_courses5_2 = () => {
    const message1 = this.createClientMessage("Audiology And Speech Language Pathology");
    const message = this.createChatBotMessage("KTR :- Fees/year :- 2.5 L | Seats Available- 20  |  Duration :- 3yrs & 1yr (internship) "
    );
    const message2 = this.createChatBotMessage("Eligibility:-1. Successful completion of +2 Examinations with science subjects.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  //////////////////______Law_Post______////////////

  law_courses_post = () => {
    const message1 = this.createClientMessage("Law");
    const message = this.createChatBotMessage("Within Law :",
    {
      widget: "Law_Courses_Post",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  law_courses_post1 = () => {
    const message1 = this.createClientMessage("LL.M - Criminal Law and Criminal Justice");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 40 | Fees/year :- 85k  |  Duration :-1 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- UG Law Degree with 60% aggregate.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  law_courses_post2 = () => {
    const message1 = this.createClientMessage("LL.M - International Trade Law");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 25 | Fees/year :- 85k  |  Duration :-1 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- UG Law Degree with 60% aggregate.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };

  /////////////////______Law_Post_________///////////

  /////////////______Law___________//////////////

  law_courses = () => {
    const message1 = this.createClientMessage("Law");
    const message = this.createChatBotMessage("Within Law :",
    {
      widget: "Law_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  law_courses1 = () => {
    const message1 = this.createClientMessage("B.A. LL.B (Hons.)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 120 | Fees/year :- 200k  |  Duration :-5 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 10, + 2 pass in regular/normal mode. Minimum 60% aggregate in +2 board examination. Appeared in 2021 CLAT/LSAT/ SRM Law Entrance .");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  law_courses2 = () => {
    const message1 = this.createClientMessage("B.Com. LL.B (Hons.)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 200k  |  Duration :-5 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 10, + 2 pass in regular/normal mode. Minimum 60% aggregate in +2 board examination. Appeared in 2021 CLAT/LSAT/ SRM Law Entrance .");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  law_courses3 = () => {
    const message1 = this.createClientMessage("LL.B (Hons.)");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 120 | Fees/year :- 200k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- Any Degree with 60% aggregate and Should pass +2 regular /normal mode.");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };


   /////////////______Law___________//////////////

   ///////////////__________Science_and_humnanities_post________//////

   s_and_h_courses_post = () => {
    const message1 = this.createClientMessage("Science and Humanities");
    const message = this.createChatBotMessage("Within Science and Humanities :",
    {
      widget: "S_and_H_Courses_Post",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  s_and_h_courses_post1 = () => {
    const message1 = this.createClientMessage("M.A - English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 30 | Fees/year :- 30k  |  Duration :-2 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- BA (English) (Minimum Aggregate of 50%)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  s_and_h_courses_post2 = () => {
    const message1 = this.createClientMessage("Journalism & Mass Communication");
    const message = this.createChatBotMessage("Within Journalism & Mass Communication:-", {
      widget: "S_and_H_Journal_Post",
    });
    
    this.addMessageToState(message1);
    this.addMessageToState(message);
    
  };
  s_and_h_courses_post3 = () => {
    const message1 = this.createClientMessage("M.Sc. - Visual Communication");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 100k  |  Duration :-2 yrs" );
    const message2 = this.createChatBotMessage("Eligibility :- Any UG Degree. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses_post4 = () => {
    const message1 = this.createClientMessage("M.Com. - Commerce");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 30k  |  Duration :-2 yrs");
    const message2 = this.createChatBotMessage("Eligibility:- Any UG degree with Accountancy and Commerce as Major course (B.Com. any stream, BBM, BCS and BBA) (Minimum Aggregate of 50%)");
    
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses_post5 = () => {
    const message1 = this.createClientMessage("M.Com. -Accounting and Finance");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 30k  |  Duration :-2 yrs");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
    
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses_post6 = () => {
    const message1 = this.createClientMessage("Education");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 50 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Degree with B.Ed. (As per NCTE Norms)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses_post7 = () => {
    const message1 = this.createClientMessage("Bio-Technology");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 100k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Biotechnology / B.Sc. Biology / B.Sc. Microbiology / B.Sc. Biochemistry /B.Sc. Agriculture / B.Sc. Physics / B.Sc. Botany / B.Sc. Zoology / B.Sc. Chemistry / B.Tech. Biotech / MBBS / BDS / BVSC / Genetics / any UG course with Biotechnology as one of the subjects/Triple major subjects and B.Sc. (Medical Lab Technology). (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses_post8 = () => {
    const message1 = this.createClientMessage("Basic Sciences");
    const message = this.createChatBotMessage("Within Basic Sciences :", {
      widget: "S_and_H_BS_Post",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses_post9 = () => {
    const message1 = this.createClientMessage("Computer Science");
    const message = this.createChatBotMessage("Within  Computer Science:", {
      widget: "S_and_H_CS_Post",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
 
  s_and_h_courses_post10 = () => {
    const message1 = this.createClientMessage("M.Sc. Yoga");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 15k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Any degree in any Discipline from any recognized University");
    
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  /////////////________S_And_H_BS_Post_____////////////

  s_and_h_BS_post1 = () => {
    const message1 = this.createClientMessage("M.Sc. - Physics");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 50 | Fees/year :- 40k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Physics with Mathematics as an ancillary subject or B.Sc. Triple Major with Physics as Major subject (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post2 = () => {
    const message1 = this.createClientMessage("M.Sc. - Chemistry");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 40 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Chemistry with Chemistry as a major Subject or Triple Major with Chemistry as one of the major Subjects (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post3 = () => {
    const message1 = this.createClientMessage("M.Sc. - Mathematics ");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 50 | Fees/year :- 30k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Mathematics with Mathematics as a major subject or B.Sc. Triple Major with Mathematics as one of the major subjects. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post4 = () => {
    const message1 = this.createClientMessage("M.Sc. - Atmospheric Science");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 40k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B. Sc. with Physics as a major subject / B. Sc. Triple Major with Physics as one of the major subjects  or equivalent ");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post5 = () => {
    const message1 = this.createClientMessage("M.Sc. - Organic Chemistry");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Chemistry / B.Sc. (Honors) Chemistry / B.Sc.Triple Majors with chemistry as one of the major subjects.");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post6 = () => {
    const message1 = this.createClientMessage("M.Sc. - Applied Mathematics & Data Analytics");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 70k  |  Duration :-5 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 +2 (Higher Secondary) Mathematics mandatory; Physics / Chemistry / Computer Science / Statistics");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS_post7 = () => {
    const message1 = this.createClientMessage("M.Sc.-Biochemistry");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 60k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Degree in Biochemistry, Chemistry, Microbiology,Biotechnology, Nutrition & Dietetics and Life Sciences (10+2+3 pattern)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

   /////////////________S_And_H_CS_Post_____////////////
   
   s_and_h_CS_post1 = () => {
    const message1 = this.createClientMessage("M.C.A. - Computer Applications");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 120 | Fees/year :- 100k  |  Duration :- yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- a) Passed B.C.A / B.Sc. in Computer Science / B.Sc. in Information Technology / B.Sc in Computer Technology / Bachelor Degree in Computer Science Engineering or equivalent Degree from a University recognized / certified by UGC / SRMIST / AIU OR b) Passed B.Sc. / B.Com. / B.A. from University recognized/certified by UGC / SRMIST / AIU with Mathematics at 10+2 Level or at Graduation Level. c) The Minimum Percentage of Marks / CGPA prescribed by SRMIST. d ) Notwithstanding the above, actual Admissions will also be based on the rules and regulations of the UGC / AICTE / Competent authorities.");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_CS_post2 = () => {
    const message1 = this.createClientMessage("M.Sc. - Information Technology");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 50k  |  Duration :- yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- B.Sc. Computer Science or B.Sc. (IT) or BCA or B.Sc. Mathematics or B.Sc. Statistics or B.Sc. Physics or B.Sc. Electronics Triple major Subject With Computer Science as one of the Major Subjects.(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_CS_post3 = () => {
    const message1 = this.createClientMessage("M.Sc. - Applied Data Science");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 50 | Fees/year :- 100k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- BSc IT / BSc Computer Science/ BCA/ BSc Mathematics / BSc Statistics/ BSc Physics/ BSc Electronics / Triple major subjects with Computer Science as one of the Major subjects ");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  /////////////________S_And_H_Journal_____////////////
 
  s_and_h_journal_post1 = () => {
    const message1 = this.createClientMessage("M.A.- Journalism and Mass Communication");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Any Bachelor Degree. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_journal_post2 = () => {
    const message1 = this.createClientMessage("M.A.-Public Relations");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Any Bachelor Degree. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   
  


   ///////////////__________Science__and_Humanities_post__________//////////

/////////////////__________Science_And_Humanities____________________/////////////

  // handleS_and_H = () => {
  //   const message1 = this.createClientMessage("Science and Humanities");
  //   const message = this.createChatBotMessage("Your queries are related to :", {
  //     widget: "S_and_H",
  //   });
  //   this.addMessageToState(message1);
  //   this.addMessageToState(message);
  // };

  s_and_h_courses = () => {
    const message1 = this.createClientMessage("Science and Humanities");
    const message = this.createChatBotMessage("Within Science and Humanities :",
    {
      widget: "S_and_H_Courses",
    }
    );
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };

  s_and_h_courses1 = () => {
    const message1 = this.createClientMessage("English");
    const message = this.createChatBotMessage(" Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs "
    );
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
   
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
   
  };
  s_and_h_courses2 = () => {
    const message1 = this.createClientMessage("Journalism & Mass Communication");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 80k  |  Duration :-3 yrs");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses3 = () => {
    const message1 = this.createClientMessage("Visual Communication");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 180 | Fees/year :- 100k  |  Duration :-3 yrs" );
    const message2 = this.createChatBotMessage("Eligibility :- 10 + 2 (Higher Secondary) Any group (or) 10+3Year Diploma(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses4 = () => {
    const message1 = this.createClientMessage("Commerce");
    const message = this.createChatBotMessage("Within Commerce:-", {
      widget: "S_and_H_Commerce",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses5 = () => {
    const message1 = this.createClientMessage("Corporate Secretary And Accounting & Finance");
    const message = this.createChatBotMessage("Within Corporate Secretary And Accounting & Finance", {
      widget: "S_and_H_CSA",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses6 = () => {
    const message1 = this.createClientMessage("Education");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 200 | Fees/year :- 50k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Any degree  (As per NCTE Norms)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses7 = () => {
    const message1 = this.createClientMessage("Bio-Technology");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 120 | Fees/year :- 80k  |  Duration :-2 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Biology mandatory with Physics, Chemistry, Computer Science, Mathematics, Psychology or any Life Science subjects.(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses8 = () => {
    const message1 = this.createClientMessage("Basic Sciences");
    const message = this.createChatBotMessage("Within Basic Sciences :", {
      widget: "S_and_H_BS",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses9 = () => {
    const message1 = this.createClientMessage("Computer Science");
    const message = this.createChatBotMessage("Within  Computer Science:", {
      widget: "S_and_H_CS",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses10 = () => {
    const message1 = this.createClientMessage("Fashion Designing");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 50k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses11 = () => {
    const message1 = this.createClientMessage("Physical Education");
    const message = this.createChatBotMessage("Within Physical Education :", {
      widget: "S_and_H_PE",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  s_and_h_courses12 = () => {
    const message1 = this.createClientMessage("Sociology");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 30k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Complete the 10+2 Exam with any major. (Minimum of 50 percentage in 12th Exam.)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses13 = () => {
    const message1 = this.createClientMessage("Psychology");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Complete the 10+2 Exam with science stream. (Minimum of 50 percentage in 12th Exam.)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_courses14 = () => {
    const message1 = this.createClientMessage("Defence");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 60k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%). Vocational groups are not eligible");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  /////////////________S_And_H_Commerce_____////////////

  s_and_h_commerce1 = () => {
    const message1 = this.createClientMessage("B.Com.Commerce ");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 180 | Fees/year :- 80k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy .(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_commerce2 = () => {
    const message1 = this.createClientMessage("B.Com. - Information System and Management");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 50k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_commerce3 = () => {
    const message1 = this.createClientMessage("B.Com. (Hons.) - International Accounting and Finance");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 125k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy .(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_commerce4 = () => {
    const message1 = this.createClientMessage("B.Com. (Hons.) - Professional Accounting");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 125k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy . (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_commerce5 = () => {
    const message1 = this.createClientMessage("B.Com. (Hons.) - Strategic Finance");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 125k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy .(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

/////////////________S_And_H_CSA_____////////////
 
  s_and_h_CSA1 = () => {
    const message1 = this.createClientMessage("B.Com. - Accounting and Finance");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 70k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy .(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_CSA2 = () => {
    const message1 = this.createClientMessage("B.Com. - Corporate Secretaryship");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 70k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Commerce, Accountancy .(Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

  /////////////________S_And_H_BS_____////////////

  s_and_h_BS1 = () => {
    const message1 = this.createClientMessage("B.Sc. - Physics");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Physics, Chemistry and Mathematics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS2 = () => {
    const message1 = this.createClientMessage("B.Sc. - Chemistry");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Physics, Chemistry and Mathematics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS3 = () => {
    const message1 = this.createClientMessage("B.Sc. - Mathematics ");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 40k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Mathematics  Mandatory; Physics /Chemistry / Computer Science / Statistics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_BS4 = () => {
    const message1 = this.createClientMessage("B.Sc.-Biochemistry");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 50k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- Candidates who have completed their 10th (SSLC) & +2(HSC) education in Science stream from a recognised Board where they have studied Physics,Chemistry, Biology  compulsorily and Mathematics (optional) can join Bsc Biochemistry.Students without biology or chemistry in their +2 cannot select this course. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };

   /////////////________S_And_H_CS_____////////////
   
   s_and_h_CS1 = () => {
    const message1 = this.createClientMessage("B.C.A. - Computer Applications");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 180 | Fees/year :- 80k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_CS2 = () => {
    const message1 = this.createClientMessage("B.C.A. - Computer Applications - Data Science");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 60 | Fees/year :- 90k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  s_and_h_CS3 = () => {
    const message1 = this.createClientMessage("B.Sc. - Computer Science");
    const message = this.createChatBotMessage("Seats Available (in KTR) :- 120 | Fees/year :- 80k  |  Duration :-3 yrs ");
    const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)");
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
   

/////////////________S_And_H_PE_____////////////

s_and_h_PE1 = () => {
  const message1 = this.createClientMessage("B.Sc. - Physical Education, Health Education and Sports");
  const message = this.createChatBotMessage("Seats Available (in KTR) :- 50 | Fees/year :- 20k  |  Duration :-3 yrs ");
  const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};
s_and_h_PE2 = () => {
  const message1 = this.createClientMessage("B.Sc. Yoga");
  const message = this.createChatBotMessage("Seats Available (in KTR) :- 30 | Fees/year :- 20k  |  Duration :-3 yrs ");
  const message2 = this.createChatBotMessage("Eligibility:- 10 + 2 (Higher Secondary) with Any Group. (Minimum Aggregate of 50%)");
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(message2);
};



/////////////////__________Science_And_Humanities____________________/////////////

  handleManagement = () => {
    const message1 = this.createClientMessage("Management");
    const message = this.createChatBotMessage("Your queries are related to :", {
      widget: "Management",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
  };
  handleLaw = () => {
    const message1 = this.createClientMessage("Law");
    const message = this.createChatBotMessage("Your queries are related to :", {
      widget: "Law",
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
   
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/admission-procedure-admission-criteria"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/ad-mission-india/engineering/admission-procedure-admission-criteria</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
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
  const message1=this.createClientMessage("When will  the applicaiton form be issued & how to enter data?");
  
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
  const message1=this.createClientMessage("What is the fee structure for admission in various programs and for lateral entry?");
  const message = this.createChatBotMessage(
    "The fee structure is available in our web portal.Structure is same as for the first year B.Tech students . Admission will be offered depending on the availability of seats. Interested candidates can contact us."
  );
  const a=this.createChatBotMessage(<a href="http://www.srmist.edu.in/admission-india/fee-details/engineering_and_technologyFees"  target="_blank" class="url-link"><p class="url-header">Click here for more details</p></a>);
  const message2 = this.createChatBotMessage("Do you have more queries?", {
    widget: "queries",
  });
  this.addMessageToState(message1);
  this.addMessageToState(message);
  this.addMessageToState(a);
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
  const message1=this.createClientMessage("Are JEE and other govt exam marks considered in SRM?");
  
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
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/admission-india/engineering/admission-procedure-how-to-apply"  target="_blank" class="url-link"><p class="url-header">For detailed info please visit https://www.srmist.edu.in/ad-mission-india/engineering/admission-procedure-how-to-apply</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
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
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM."
      
    );
    const message2 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
  };
  el2 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for B.Arch ?");
    const message = this.createChatBotMessage(
      "A pass in 10+2 examination with at least 50% aggregate marks in Physics, Chemistry & Mathematics and also at least 50% marks in aggregate of the 10+2 level examination or passed 10+3 Diploma Examination with Mathematics as compulsory subject with at least 50% marks in aggregate."
    );
    const message2 = this.createChatBotMessage(
      "A pass in National Aptitude Test in Architecture (NATA), IITJEE Mains - Paper II is also considered, based on the passing criteria."
    );
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(message1);
    this.addMessageToState(message);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
  };
  
  el3 = () => {
    const message1=this.createClientMessage("What is the eligibility criteria for Bio-Engineering Programs?");
    const message = this.createChatBotMessage(
      "Nationality and Age:\nResident Indian or Non-Resident Indian (NRI), holder of PIO or OCI card issued by Government of India are eligible to apply for SRMJEEE (UG).Minimum 50% aggregate in PCM/PMB/PCB."
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
      "A Pass in 10+2 (Higher Secondary) examination or any other equivalent examination of any authority recognized by SRMIST with a minimum of 50% aggregate/percentage of marks. Criteria 1: UCEED Score + (Written Exam+Personal Interview) at SRM Criteria 2: Written Exam + Personal Interview at SRMIST"
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
    const message1=this.createClientMessage("I am currently doing my B.Tech 1st year in other University. Can I join SRM from 2nd year?");
    const message = this.createChatBotMessage(
      "Yes, We have provision for migration."
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
    const message1=this.createClientMessage("What necessary items students must bring to the hostel?");
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
    const message1=this.createClientMessage("What are the facilities available for the students in the hostel?");
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
  hostelQues7 = () => {
    const message = this.createClientMessage("Events");
    this.addMessageToState(message);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/sample-faqs-hostel"  target="_blank" class="url-link"><p class="url-header"> For detailed info please visit https://www.srmist.edu.in/sample-faqs-hostel</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);  
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
      "Available Seats:\n . .  .  Kattankulathur- 120\n | Ramapuram- 60\n | Vadapalani- 0\n | NCR- 0\n | Amravati-0\n |  Haryana-60\n | Sikkim-0"
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
      "Available Seats   :  -  || Kattankulathur-120        |   Rama-puram-0  |    Vadapalani-0  |   NCR-0  |   Amravati-0    |    Haryana-0  |  Sikkim-0"
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
      "Available Seats   :  -  || Kattankulathur-0       |   Ramapuram-0  |    Vadapalani-0  |   NCR-0  |   Amravati-0    |    Haryana-60  |  Sikkim-0"
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
      "Available Seats   :  -  || Kattankulathur-0        |   Ramapuram-180  |    Vadapalani-0  |   NCR-0  |   Amravati-0    |    Haryana-0  |  Sikkim-0"
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
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/placement/recruiters"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/place-ment/recruiters</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
  };
  placement_contact = () => {
    const message1=this.createClientMessage("Placement Contact");
    this.addMessageToState(message1);
    const a=this.createChatBotMessage(<a href="https://www.srmist.edu.in/placement/contacts"  target="_blank" class="url-link"><p class="url-header">https://www.srmist.edu.in/place-ment/contacts</p></a>);
    const message3 = this.createChatBotMessage("Do you have more queries?", {
      widget: "queries",
    });
    this.addMessageToState(a);
    this.addMessageToState(message3);
    
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
