function submitForm() {
  var getresult = document.getElementById("result");
  var firstname = document.getElementById("firstname").value;
  var getlastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var getusername = document.getElementById("username").value;
  var getusernumber = document.getElementById("usernumber").value;
  var getuserBirth = document.getElementById("userBirth").value;
  var getpassword = document.getElementById("password").value;
  var getconfirmpassword = document.getElementById("confirmpassword").value;

  getresult.innerHTML =
    firstname +
    "  " +
    getlastname +
    "<br> " +
    email +
    " <br>" +
    getusername +
    "<br> " +
    getusernumber +
    " <br>" +
    getuserBirth +
    " <br>" +
    getpassword +
    "<br> " +
    getconfirmpassword;
}
