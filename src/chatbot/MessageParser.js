class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase= message.toLowerCase();
      if(lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hey")|| lowercase.includes("hy"))
      {
        this.actionProvider.greet();
      }
      if(lowercase.includes("about us") || lowercase.includes("about srm")|| lowercase.includes("information")||lowercase.includes("info")||lowercase.includes("know about srm") )
      {
        this.actionProvider.handleaboutus();
      }
      if(lowercase.includes("apply")||lowercase.includes("put in an application") )
      {
        this.actionProvider.apply();
      }
      if(lowercase.includes("fee") || lowercase.includes("fees")||lowercase.includes("payment")||lowercase.includes("allowance needed")||lowercase.includes("charges")||lowercase.includes("figure")||lowercase.includes("price")||lowercase.includes("financial")||lowercase.includes("grant"))
      {
        this.actionProvider.fees();
      }
      if(lowercase.includes("admission")||lowercase.includes("admittance")||lowercase.includes("entrance")||lowercase.includes("adm") )
      {
        this.actionProvider.handleadmissions();
      }
      if(lowercase.includes("counselling") )
      {
        this.actionProvider.handlecounselling();
      }
      if(lowercase.includes("application")||lowercase.includes("form") )
      {
        this.actionProvider.handleadmissions();
      }
      if(lowercase.includes("eligibility criteria")||lowercase.includes("capability")||lowercase.includes("admissibility")||lowercase.includes("qualities")||lowercase.includes("selection needs")||lowercase.includes("requirement")||lowercase.includes("standard")||lowercase.includes("std")||lowercase.includes("guideline")||lowercase.includes("basis") )
      {
        this.actionProvider.el1();
      }
      if(lowercase.includes("courses") && lowercase.includes("PCB") && lowercase.includes("eligible") )
      {
        this.actionProvider.el2();
      }
      if(lowercase.includes("eligible") && lowercase.includes("NIOS") )
      {
        this.actionProvider.el4();
      }
      if(lowercase.includes("B.Tech") && lowercase.includes("first year") && lowercase.includes("other University") )
      {
        this.actionProvider.el3();
      }
      if(lowercase.includes("counselling") && (lowercase.includes("duration") || lowercase.includes("eligible") ))
      {
        this.actionProvider.Coun1();
      }
      if(lowercase.includes("parents come along with candidates") )
      {
        this.actionProvider.Coun4();
      }
      if(lowercase.includes("date") && lowercase.includes("rescheduled") )
      {
        this.actionProvider.Coun2();
      }
      if(lowercase.includes("counselling") && (lowercase.includes("duration") || lowercase.includes("eligible") ))
      {
        this.actionProvider.Coun1();
      }
      if(lowercase.includes("counselling fees") && lowercase.includes("refund") )
      {
        this.actionProvider.Coun3();
      }
      if(lowercase.includes("arrange") && lowercase.includes("loan") )
      {
        this.actionProvider.Coun5();
      }
      if(lowercase.includes("original certificate")  )
      {
        this.actionProvider.Coun2();
      }
      if(lowercase.includes("application form") && lowercase.includes("issue") )
      {
        this.actionProvider.appli1();
      }
      if(lowercase.includes("required document") && lowercase.includes("srmjeee") )
      {
        this.actionProvider.appli3();
      }
      if(lowercase.includes("jee") && lowercase.includes("consider") )
      {
        this.actionProvider.appli4();
      }
      if(lowercase.includes("nri candidate")  )
      {
        this.actionProvider.appli5();
      }
      if(lowercase.includes("admission criteria") )
      {
        this.actionProvider.adminCriteria();
      }
      if(lowercase.includes("how to apply") )
      {
        this.actionProvider.howToApply();
      }
      if(lowercase.includes("fee structure") && lowercase.includes("admiss"))
      {
        this.actionProvider.appli2();
      }
      if(lowercase.includes("application") )
      {
        this.actionProvider.handleapplication();
      }
      if(lowercase.includes("eligibility") )
      {
        this.actionProvider.handleeligibility();
      }
      if(lowercase.includes("international") )
      {
        this.actionProvider.international();
      }
      if(lowercase.includes("academics") )
      {
        this.actionProvider.academics();
      }
      if(lowercase.includes("research") )
      {
        this.actionProvider.adminCriteria();
      }
      if(lowercase.includes("hostel") )
      {
        this.actionProvider.hostel();
      }
      if(lowercase.includes("campus life") )
      {
        this.actionProvider.campus();
      }
      if(lowercase.includes("events") )
      {
        this.actionProvider.events();
      }
      if(lowercase.includes("under graduate") )
      {
        this.actionProvider.handleprograms();
      }
      if(lowercase.includes("post graduate") )
      {
        this.actionProvider.postgrad();
      }
      if(lowercase.includes("contact") )
      {
        this.actionProvider.contact();
      }
      // else
      // {
      //   this.actionProvider.elsemessage();
      // }
      
      

     
     
      
    }
  }
  
  export default MessageParser;