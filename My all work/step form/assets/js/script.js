function nextpage2(event) {
  let submit = true;
  let fullname = document.getElementsByName("fullname")[0].value;
  let flen = fullname.length;
  let Email = document.getElementsByName("email")[0].value;
  let Elen = Email.length;
  if(flen<2){
    submit=false;
    let element=document.getElementById("NameError");
    element.classList.add("color");
  }
  else if(Elen<8 || !(/\S+@\S+\.\S+/.test(Email))){ 
    submit=false;
    let element=document.getElementById("EmailError");
    element.classList.add("color");
  }
  else{
    let element=document.getElementById("NameError");
    element.classList.remove("color");
    element.classList.add("hidden");
    let element2=document.getElementById("EmailError");
    element2.classList.remove("color");
    element2.classList.add("hidden");
    let el = document.getElementById("field-1");
    el.classList.remove("show");
    el.classList.add("hidden");
    let el2 = document.getElementById("field-2");
    el2.classList.remove("hidden");
    el2.classList.add("show");
  }
  return submit;
}


function prvpage1(event) {
  let el = document.getElementById("field-1");
  el.classList.remove("hidden");
  el.classList.add("show");
  let el2 = document.getElementById("field-2");
  el2.classList.remove("show");
  el2.classList.add("hidden");
}


function nextpage3(event){
  let isValid = true;
  let DOB = document.getElementById("dob").value;
  let add = document.getElementById("addr").value;
  let addL = add.length;
  if(DOB == ""){
    isValid = false;
    let element = document.getElementById("DOBError");
    element.classList.remove("hidden");
    element.classList.add("color");
    let el1= document.getElementById("field-1");
    el1.classList.add("hidden");
    let el2=document.getElementById("field-2");
    el2.classList.remove("hidden");
    el2.classList.add("show");
    let el3=document.getElementById("field-3");
    el3.classList.remove("show");
    el3.classList.add("hidden");
  }
  else if(add == "" || addL<2){
     isValid = false;
     let element = document.getElementById("AddError");
     element.classList.remove("hidden");
     element.classList.add("color");
     let el1= document.getElementById("field-1");
     el1.classList.remove("show");
     el1.classList.add("hidden");
     let el2=document.getElementById("field-2");
     el2.classList.remove("hidden");
     el2.classList.add("show");
     let el3=document.getElementById("field-3");
     el3.classList.remove("show");
     el3.classList.add("hidden");
    }
    else{
    let element=document.getElementById("DOBError");
    element.classList.remove("color");
    element.classList.add("hidden");
    let element2=document.getElementById("AddError");
    element2.classList.remove("color");
    element2.classList.add("hidden");
    let el = document.getElementById("field-1");
    el.classList.remove("show");
    el.classList.add("hidden");
    let el2 = document.getElementById("field-2");
    el2.classList.remove("show");
    el2.classList.add("hidden");
    let el3 = document.getElementById("field-3");
    el3.classList.remove("hidden");
    el3.classList.add("show");
    } 
   return isValid;
}


function prvpage2(event){
  let el1 = document.getElementById("field-1");
  el1.classList.add("hiddent");
  el1.classList.remove("show");
  let el2 = document.getElementById("field-2");
  el2.classList.add("show");
  el2.classList.remove("hidden");
  let el3 = document.getElementById("field-3");
  el3.classList.add("hidden");
  el3.classList.remove("show");
}

function Complete(event){
  let isValid = true;
  let Pass = document.getElementById("pass").value;
  let PassL = Pass.length;
  let Cpass = document.getElementById("cnpsw").value;
  let CpassL = Cpass.length;
  if(!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(Pass))){
     isValid = false;
     element = document.getElementById("PassError");
     element.classList.add("color");
  }
  else if(Pass != Cpass){
    isValid = false;
    element = document.getElementById("CpassError");
    element.classList.add("color");
  }
  else{
    let element=document.getElementById("PassError");
    element.classList.remove("color");
    element.classList.add("hidden");
    let element2=document.getElementById("CpassError");
    element2.classList.remove("color");
    element2.classList.add("hidden");
    alert(`YOUR FORM HAS BEEN SUBMITTED`);
  }
  return isValid;
}

function removeError(event){
  let element=document.getElementById("NameError");
  let element2=document.getElementById("EmailError");
  let element3=document.getElementById("DOBError");
  let element4=document.getElementById("AddError");
  let element5=document.getElementById("PassError");
  let element6=document.getElementById("CpassError");
  element.classList.remove("color");
  element.classList.add("hidden");
  element2.classList.remove("color");
  element2.classList.add("hidden");
  element3.classList.remove("color");
  element3.classList.add("hidden");
  element4.classList.remove("color");
  element4.classList.add("hidden");
  element5.classList.remove("color");
  element5.classList.add("hidden");
  element6.classList.remove("color");
  element6.classList.add("hidden");
}


 function rmverror(event){
     let Name = document.getElementById("fname").value;
     NameL = Name.length;
     let Email = document.getElementById("email").value;
     EmailL = Email.length;
     let DOB = document.getElementById("dob").value;
     let Add = document.getElementById("addr").value;
     let Pass = document.getElementById("pass").value;
     let Cpass = document.getElementById("cnpsw").value;
     AddL = Add.length;
     let element = document.getElementById("fname");
     let element2 = document.getElementById("email");
     let element3 = document.getElementById("dob");
     let element4 = document.getElementById("addr");
     let element5 = document.getElementById("pass");
     let element6 = document.getElementById("cnpsw");
     if(NameL>=2){
     element.classList.add("input_color-green");
     }
     else{
      element.classList.remove("input_color-green");
      element.classList.add("input_color-red");
     }
     if(EmailL>=8 && (/\S+@\S+\.\S+/.test(Email))){
      element2.classList.add("input_color-green");
    }
     else{
       element2.classList.remove("input_color-green");
       element2.classList.add("input_color-red");
     }
     if(DOB != ""){
       element3.classList.add("input_color-green");
     }
     else{
       element3.classList.remove("input_color-green");
       element3.classList.add("input_color-red");
     }
     if(AddL>=2){
       element4.classList.add("input_color-green");
     }
     else{
      element4.classList.remove("input_color-green");
      element4.classList.add("input_color-red");
     }
     if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(Pass)){
       element5.classList.add("input_color-green");
     }
     else{
      element5.classList.remove("input_color-green");
      element5.classList.add("input_color-red");
     }
     if(Pass == Cpass){
      element6.classList.add("input_color-green");
     }
     else{
      element6.classList.remove("input_color-green");
      element6.classList.add("input_color-red");
     }
 }






