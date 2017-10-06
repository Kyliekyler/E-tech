$(document).ready(function() {
$("signup").click(function() {
var firstname = $("firstname").val();
var lastname = $("lastname").val();
var email = $("email").val();
var password1 = $("password1").val();
var password2 = $("password2").val();
if (firstname == '' || lastname == '' || email == '' || password1 == '' || password2 == '') {
alert("Please fill all fields");
} else if ((password.length) < 6) {
alert("Password should atleast 6 character in length");
} else if (!(password1).match(password2)) {
alert("Your passwords don't match. Try again?");
} else {
$.post("register.php", {
firstname1: firstname,
lastname1: lastname,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Signup…') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
