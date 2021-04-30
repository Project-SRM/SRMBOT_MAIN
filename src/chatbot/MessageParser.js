class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase= message.toLowerCase();

    if(lowercase.includes("hello ") || lowercase==="hi" || lowercase.includes("hey")|| lowercase.includes("hy"))
    {
      this.actionProvider.greet();
    }
    //////////////////overview///////////////////////////////
    else if(lowercase.includes("about us") || lowercase.includes("about srm")|| lowercase.includes("information")||lowercase.includes("info")||lowercase.includes("know about srm") )
    {
      this.actionProvider.handleaboutus();
    }
    else if(lowercase.includes("apply")||lowercase.includes("put in an application") )
    {
      this.actionProvider.apply();
    }
    else if(lowercase.includes("fee") || lowercase.includes("fees")||lowercase.includes("payment")||lowercase.includes("allowance needed")||lowercase.includes("charges")||lowercase.includes("figure")||lowercase.includes("price")||lowercase.includes("financial")||lowercase.includes("refund")||lowercase.includes("tution") || lowercase.includes("loan") || lowercase.includes("scholar"))
    {
      this.actionProvider.fees();
    }
    else if(lowercase.includes("admission")||lowercase.includes("admittance")||lowercase.includes("entrance")||lowercase.includes("adm") )
    {
      this.actionProvider.handleadmissions();
    }
   else  if(lowercase.includes("counselling") )
    {
      this.actionProvider.handlecounselling();
    }
    else if(lowercase.includes("application")||lowercase.includes("form") )
    {
      this.actionProvider.handleapplication();
    }
    else if(lowercase.includes("engin")||lowercase.includes("med")||lowercase.includes("law")||lowercase.includes("science")||lowercase.includes("humanities")||lowercase.includes("other") )
    {
      this.actionProvider.handleprograms();
    }
    else if(lowercase.includes("eligibility criteria")||lowercase.includes("capability")||lowercase.includes("admissibility")||lowercase.includes("qualities")||lowercase.includes("selection needs")||lowercase.includes("requirement")||lowercase.includes("standard")||lowercase.includes("std")||lowercase.includes("guideline")||lowercase.includes("basis") )
    {
      this.actionProvider.el1();
    }
    else if(lowercase.includes("courses") && lowercase.includes("PCB") && lowercase.includes("eligible") )
    {
      this.actionProvider.el2();
    }
   else  if(lowercase.includes("eligible") && lowercase.includes("NIOS") )
    {
      this.actionProvider.el4();
    }
   else if(lowercase.includes("B.Tech") && lowercase.includes("first year") && lowercase.includes("other University") )
    {
      this.actionProvider.el3();
    }
    else if(lowercase.includes("counselling") && (lowercase.includes("duration") || lowercase.includes("eligible") ))
    {
      this.actionProvider.Coun1();
    }
    else if(lowercase.includes("parents come along with candidates") )
    {
      this.actionProvider.Coun4();
    }
    else if(lowercase.includes("date") && lowercase.includes("rescheduled") )
    {
      this.actionProvider.Coun2();
    }
    else if(lowercase.includes("counselling") && (lowercase.includes("duration") || lowercase.includes("eligible") ))
    {
      this.actionProvider.Coun1();
    }
    else if(lowercase.includes("counselling fees") && lowercase.includes("refund") )
    {
      this.actionProvider.Coun3();
    }
    else if(lowercase.includes("arrange") && lowercase.includes("loan") )
    {
      this.actionProvider.Coun5();
    }
    else if(lowercase.includes("original certificate")  )
    {
      this.actionProvider.Coun2();
    }
    else if(lowercase.includes("application form") && lowercase.includes("issue") )
    {
      this.actionProvider.appli1();
    }
    else if(lowercase.includes("required doc") && lowercase.includes("srmjeee") )
    {
      this.actionProvider.appli3();
    }
    else if(lowercase.includes("srmjee") || lowercase.includes("srm exam")|| lowercase.includes("last date") )
    {
      this.actionProvider.srmjee();
    }
    else if (lowercase.includes("contributors"))
    { 
      message="Purboshi Das,Nandini Chourasia,Sidhant Suman,Arpit Dakhera,Vishnupriya Jayaraman,Vijeta Sarkar";
      console.log(message);
    }
    else if(lowercase.includes("jee") && lowercase.includes("consider") )
    {
      this.actionProvider.appli4();
    }
    else if(lowercase.includes("nri candidate")  )
    {
      this.actionProvider.appli5();
    }
    else if(lowercase.includes("admission criteria") )
    {
      this.actionProvider.adminCriteria();
    }
    else if(lowercase.includes("how to apply") )
    {
      this.actionProvider.howToApply();
    }
    else if(lowercase.includes("fee structure") && lowercase.includes("admiss"))
    {
      this.actionProvider.appli2();
    }
    else if(lowercase.includes("application") )
    {
      this.actionProvider.handleapplication();
    }
    else if(lowercase.includes("eligibility") )
    {
      this.actionProvider.handleeligibility();
    }
   else  if(lowercase.includes("international") )
    {
      this.actionProvider.international();
    }
    else if(lowercase.includes("academics") )
    {
      this.actionProvider.academics();
    }
    else if(lowercase.includes("research") )
    {
      this.actionProvider.adminCriteria();
    }
    else if(lowercase.includes("hostel") )
    {
      this.actionProvider.hostel();
    }
    else if(lowercase.includes("campus life") )
    {
      this.actionProvider.campus();
    }
    else if(lowercase.includes("events") )
    {
      this.actionProvider.events();
    }
    else if(lowercase.includes("under graduate") )
    {
      this.actionProvider.handleprograms();
    }
    else if(lowercase.includes("post graduate") )
    {
      this.actionProvider.postgrad();
    }
    else if(lowercase.includes("contact") )
    {
      this.actionProvider.contact();
    }
    else if(lowercase.includes("hostel fees") )
    {
      this.actionProvider.hostelfeesmessage();
    }
    else if(lowercase.includes("courses offered") ||lowercase.includes("course offered"))
    {
      this.actionProvider.course();
    }
    else if(lowercase.includes("architechture") ||lowercase.includes("b.arch"))
    {
      this.actionProvider.arc1();
    }
    
    else if(lowercase.includes("design") ||lowercase.includes("b.des"))
    {
      this.actionProvider.arc2();
    }
    else if(lowercase.includes("place") || lowercase.includes("salary") || lowercase.includes("package"))
    {
      this.actionProvider.placement();
    }
    //&&&&&&&&&&&&______________________SCHOOLS__________________________&&&&&&&&
    else if(lowercase.includes("biotechnology") ||lowercase.includes("biotech") || lowercase.includes("biomedical")||lowercase.includes("biomed") || lowercase.includes("bio") || lowercase.includes("biological engineering") || lowercase.includes("bio engineering") || lowercase.includes("biology"))
    {
      this.actionProvider.bio();
    }
    else if( lowercase.includes("chem"))
    {
      this.actionProvider.chem();
    }
    else if(lowercase.includes("civil") ||lowercase.includes("civ"))
    {
      this.actionProvider.civil();
    }
    else if(lowercase.includes("mech") ||lowercase.includes("auto")  || lowercase.includes("aero") || lowercase.includes("automotive electronics"))
    {
      this.actionProvider.mech();
    }
    else if(lowercase.includes("eee") || lowercase.includes("ece") || lowercase.includes("elect") || lowercase.includes("commun"))
    {
      this.actionProvider.eee();
    }
    else if(lowercase.includes("cse") || lowercase.includes("comp") || lowercase.includes("it") || lowercase.includes("soft")|| lowercase.includes("info") ||lowercase.includes("ai") || lowercase.includes("ml") || lowercase.includes("artificial")|| lowercase.includes("machine learning") || lowercase.includes("data") || lowercase.includes("net") || lowercase.includes("cloud") || lowercase.includes("security") || lowercase.includes("cyber") || lowercase.includes("iot") || lowercase.includes("internet"))
    {
      this.actionProvider.comp();
    }
    //&&&&&&&&&&&&______________________SCHOOLS__________________________&&&&&&&&
    else if(lowercase.includes("thank")||lowercase.includes("by")||lowercase.includes("bi") )
    {
      this.actionProvider.nomessage();
    }
    else if(lowercase==="" )
    {
      this.actionProvider.blankmessage();
    }
    
    else 
    {
      this.actionProvider.elsemessage();
    }
    
    

   
   
    
  }
}

export default MessageParser;
