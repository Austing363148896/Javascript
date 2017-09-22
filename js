var ele_pass_box = document.getElementsByTagName("div")[0];
var ele_pass = ele_pass_box.getElementsByTagName("input")[0];
var ele_eye = ele_pass_box.getElementsByTagName("i")[0];
ele_eye.onclick = function () {
var state = this.getAttribute("state");
if(state === "off") {
ele_pass.setAttribute("type", "text");
ele_eye.setAttribute("state", "on");
ele_eye.style.opacity = 0.2;
} else {
ele_pass.setAttribute("type", "password");
ele_eye.setAttribute("state", "off");
ele_eye.style.opacity = 1;
}
}
