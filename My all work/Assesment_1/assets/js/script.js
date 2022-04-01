$(document).ready(function() {
    var divWidth = $("#telno").width();
      
    $("#telno").mouseenter(function(){
        $(this).animate({
            width: "12vw"
        });
    }).mouseleave(function(){
        $(this).animate({
            width: "2vw"
        });
    });
    $('#nameerror').hide();   
    $('#emailerror').hide();
    $('#phoneerror').hide();
    $('#messageerror').hide();


    // <=========== NAME VALIDATION ON KEYUP EVENT ==============>
        $('#fullname').keyup(function () {
        let usernameError = true;
        let usernameValue = $('#fullname').val();
        if (usernameValue.length < 2 || usernameValue.length > 15) {
        $('#nameerror').show(250);
        $('#nameerror').html
  ("**User name is not valid :(");
            usernameError = false;
        }
        else {
            $('#nameerror').hide(250);
            usernameError=true;
        }
        return usernameError;
    });
    // <=========== EMAIL VALIDATION ON KEYUP EVENT ==============>
    $('#email').keyup(function () {
        let useremailerror = true;
        let useremailValue = $('#email').val();
        if (!(/\S+@\S+\.\S+/).test(useremailValue)){
        $('#emailerror').show(250);
        $('#emailerror').html
  ("**Email is not valid :(");
            useremailerror = false;
        }
        else {
            $('#emailerror').hide(250);
            useremailError=true;
        }
        return useremailError;
    });
     // <=========== PHONE VALIDATION ON KEYUP EVENT ==============>
     $('#phone').keyup(function () {
        let userphoneError = true;
        let userphoneValue = $('#phone').val();
        if (userphoneValue.length != 10 || userphoneValue == isNaN){
        $('#phoneerror').show(250);
        $('#phoneerror').html
  ("**Phone number is not valid  :(");
            userphoneerror = false;
        }
        else {
            $('#phoneerror').hide(250);
            userphoneError=true;
        }
        return userphoneError;
    });
     // <=========== MESSAGE VALIDATION ON KEYUP EVENT ==============>
     $('#message').keyup(function () {
        let usermessageError = true;
        let usermessageValue = $('#message').val();
        if (usermessageValue.length < 16 || usermessageValue == ""){
        $('#messageerror').show(250);
        $('#messageerror').html
  ("**Message should be at least of 16 charactors :)");
            usermessageError = false;
        }
        else {
            $('#messageerror').hide(250);
            usermessageError=true;
        }
        return usermessageError;
    });


    // <=========== COMPLETE VALIDATION ON SUBMIT EVENT ==============>
      $('#myForm').submit(function () {
        let Error = true;
        let usernameValue = $('#fullname').val();
        let useremailValue = $('#email').val();
        let userphoneValue = $('#phone').val();
        let usermessageValue = $('#message').val();
        if (usernameValue == "" || usernameValue.length < 2 || usernameValue.length > 15) {
            $('#nameerror').show(250);
            Error = false;
        } 
        else if(useremailValue=="" || !(/\S+@\S+\.\S+/).test(useremailValue)){
            $('#emailerror').show(250);
            Error = false;
        }
        else if(userphoneValue == ""){
            $('#phoneerror').show(250);
            Error = false;
        }
        else if(usermessageValue == ""){
            $('#messageerror').show(250);
            Error = false;
        }
        else {
            $('#nameerror').hide(250);
            $('#emailerror').hide(250);
            $('#phoneerror').hide(250);
            $('#messageerror').hide(250);
            Error=true;
        }
        return Error;
    });


    // <============= TOGGLE BUTTON FOR NAVBAR ======================>

});
$(document).ready(function(){
    $("#toggle-btn").click(function () {
        $("#list-div").toggle(280);
        $('#toggle-btn').toggleClass("btn-checked");
        $('#menu-icon').toggleClass("menu-icon-clicked");
    });
    var MAX_WIDTH = 767, $window = $(window), toggleEnabled = true;

$window.on('resize', function() {
    if ($window.width() > MAX_WIDTH) {
        $("#toggle-btn").hide();
        $("#list-div").show(2);
    } else {
        
        $("#toggle-btn").show(2);
     
        $('#list-div').hide();

        toggleEnabled = true;
    }
    if($window.width()<MAX_WIDTH){
        $("#toggle-btn").click(function () {
            
        });
    }
   
});
$window.trigger('resize');
// $('#btn2').click(function(){
// console.log('btn clicked')


// $.ajax({
//   type: "GET",
//   url: "https://jsonplaceholder.typicode.com/todos",
//   cache: false,
//   success: function(data){
//       console.log(data)
  
//   }
// });
// });
});
