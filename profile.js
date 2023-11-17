var Name = document.getElementById("Name")
var Email = document.getElementById("Email")
var Password = document.getElementById("Password")

var answerEm = localStorage.getItem("Email")
var userEm = localStorage.getItem("Username")
var passEm = localStorage.getItem("Password")

Name.innerHTML = "Name : " + userEm;
Email.innerHTML = "Email : " + answerEm;
Password.innerHTML = "Password : " + "*".repeat(passEm.length);


document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#Setting").addEventListener('click', () => {
        document.getElementById("menu").classList.toggle('show');
    })
})