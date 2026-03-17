/*reset page jsscript*/
function togglePassword(id){
const pass=document.getElementById(id);
pass.type=pass.type==="password"?"text":"password";
}

function showLoader(btn){
btn.querySelector(".spinner-border").classList.remove("d-none");
btn.querySelector(".btn-text").innerText="Updating...";
}

/*registration jsscript*/
const password=document.getElementById("password");
const strengthText=document.getElementById("strengthText");

password.addEventListener("input",()=>{
const val=password.value;

if(val.length<4){
strengthText.innerText="Weak";
strengthText.style.color="red";
}
else if(val.length<8){
strengthText.innerText="Medium";
strengthText.style.color="orange";
}
else{
strengthText.innerText="Strong";
strengthText.style.color="green";
}
});

function togglePassword(id){
const pass=document.getElementById(id);
pass.type=pass.type==="password"?"text":"password";
}

function validateRegister(){
const pass=document.getElementById("password").value;
const confirm=document.getElementById("confirm").value;

if(pass!==confirm){
alert("Passwords do not match!");
return false;
}
return true;
}

function showLoader(btn){
btn.querySelector(".spinner-border").classList.remove("d-none");
btn.querySelector(".btn-text").innerText="Loading...";
}

/* Login jsscript*/
function togglePassword(id){
const pass=document.getElementById(id);
pass.type=pass.type==="password"?"text":"password";
}

function validateLogin(){
if(user.value===""||pass.value===""){
alert("All fields required!");
return false;
}
return true;
}

function showLoader(btn){
btn.querySelector(".spinner-border").classList.remove("d-none");
btn.querySelector(".btn-text").innerText="Loading...";
}

/* forgot js script*/
function validateEmail(){
const email=document.getElementById("email").value;
if(email===""){
alert("Email required!");
return false;
}
return true;
}

function showLoader(btn){
btn.querySelector(".spinner-border").classList.remove("d-none");
btn.querySelector(".btn-text").innerText="Sending...";
}

/*dashboard js script*/
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}