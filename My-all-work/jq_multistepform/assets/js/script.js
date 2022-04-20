$(document).ready(function () {
  //$('[class^="text-"], [class*=" text-"]')
  $(".Error").hide()
  $('#field-2').hide()
  $("#field-3").hide()


  $(".Nxt1").click(function () {
    let NameValue = $("#fname").val();
    let Namelength = NameValue.length;
    let EmailValue = $("#email").val();
    //   let Emaillength = EmailValue.length;
    if (NameValue == "" || Namelength < 2 || Namelength > 15) {
      $(".NameError").show(300);
    }
    else if (EmailValue = "" || !(/\S+@\S+\.\S+/).test(EmailValue)) {
      $(".EmailError").show(300);
    }
    else {
      $("#field-1").hide();
      $("#field-2").show();
      $(".Error").hide();
    }
  });


  $(".Prv1").click(function () {
    $("#field-2").hide();
    $("#field-1").show();
    $(".Error").hide()
  });


  $(".Nxt2").click(function () {
    let DobValue = $("#dob").val();
    let AddValue = $("#addr").val();
    let AddLength = AddValue.length;
    if (DobValue == "") {
      $(".DOBError").show(300);
    }
    else if (AddLength < 5) {
      $(".AddError").show(300);
    }
    else {
      $("#field-2").hide();
      $("#field-3").show();
      $(".Error").hide()
    }
  });


  $(".Prv2").click(function () {
    $("#field-3").hide();
    $("#field-2").show();
    $(".Error").hide()
  });


  $(".stepform").submit(function () {
    let isValid = true;
    let PassValue = $("#pass").val();
    let CpassValue = $("#cnpsw").val();
    if (PassValue == "" || !(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(PassValue))) {
      $(".PassError").show(300);
      isValid = false;
    }
    else if (PassValue != CpassValue) {
      $(".CpassError").show(300);
      isValid = false;
    }
    else {

      $(".Error").hide()
      isValid = true
    }
    return isValid;
  });

  //================ KEYUP VALIDATION ===================

  $(".input").keyup(function () {
    let NameValue = $("#fname").val();
    let Namelength = NameValue.length;
    let EmailValue = $("#email").val();
    let DobValue = $("#dob").val();
    let AddValue = $("#addr").val();
    let PassValue = $("#pass").val();
    let CpassValue = $("#cnpsw").val();
    let AddLength = AddValue.length;
    if (Namelength > 1) {
      $(".NameError").hide(300);
    }
    if ((/\S+@\S+\.\S+/).test(EmailValue)) {
      $(".EmailError").hide(300)
    }
    if (DobValue != "") {
      $(".DOBError").hide(300)
    }
    if (AddLength > 5) {
      $(".AddError").hide(300)
    }
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(PassValue)) {
      $(".PassError").hide(300)
    }
    if (CpassValue == PassValue) {
      $(".CpassError").hide(300)
    }
  })

});