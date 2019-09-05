

//function check_empty() {
  //if (document.getElementById('your-name').value == "" || document.getElementById('email').value == "" || document.getElementById('title').value == "" || document.getElementById('message').value == "") {
  //alert("Message requires all fields!");
  //} else {
  //document.getElementById('myForm').submit();
  //alert("Your message has been sent successfully. You should receive a reply as quickly as possible. Thank you.");
  //}
  //}



function validField() {
  
  var email = document.getElementById("email");
  var emailForm = document.getElementById("email").value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);

  if (document.getElementById("your-name").value=="") {
    alert("Please fill in name");
    return false;
  }
  if (document.getElementById("your-name").value.length < 4) {
    alert("Name must be more than 4 characters");
    return false;
  }

  if (document.getElementById("email").value=="" || document.getElementById("email").value==null) {
    alert("Please fill in your email");
    return false;
  }
  
  //if (email==(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    //alert("Please enter right email");
    //return true;
  //}
 

  if (document.getElementById("title").value=="" || document.getElementById("title").value==null) {
    alert("Please enter subject of message");
    return false;
  }

  if (document.getElementById("message").value=="") {
    alert("Please write your message");
    return false;
  }
  if (document.getElementById("message").value.length < 20) {
    alert("Message must be at least 20 characters");
    return false;
  } else {
    document.getElementById('myForm').submit();
  alert("Your message has been sent successfully. Thank you.");
  }
  }



document.querySelector("#button").addEventListener("click",
function() {
  document.querySelector(".myForm_BG").style.display="flex";
})

document.querySelector(".fold").addEventListener("click", 
function(){
  document.querySelector(".myForm_BG").style.display = "none";
})
