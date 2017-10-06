$(document).ready(function() {
$("#signup").click(function() {
var name = $("#firstname").val();
var name = $("#lastname").val();
var email = $("#email").val();
var password1 = $("#password1").val();
var password2 = $("#password2").val();
if (firstname == '' || email == '' || password1 == '' || password2 == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 6) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});
