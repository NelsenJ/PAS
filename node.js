document.addEventListener("DOMContentLoaded", function(){
    const RegiBtn =  document.getElementById("Regi-btn")
    const LoginBtn = document.getElementById("Login-btn")
    const RegisterForm = document.querySelector(".form-box-register")
    const LoginForm = document.querySelector(".form-box-login")
    const UsernameRegi = document.querySelector("#Username-regi")
    const EmailRegi = document.querySelector("#Email-regi")
    const PasswordRegi = document.querySelector("#Pass-regi")
    const EmailLogi = document.querySelector("#EmailLogin")
    const PassLogi = document.querySelector("#PassLogin")
    RegiBtn.addEventListener('click',()=>{
        RegisterForm.classList.add('active');
        LoginForm.classList.add('active')
    })
    LoginBtn.addEventListener('click',()=>{
        RegisterForm.classList.remove('active');
        LoginForm.classList.remove('active')
    })
    document.querySelector("#Login").addEventListener('click', function(){
        let email = localStorage.getItem("Email");
        let pass = localStorage.getItem("Password")
        let emailAns = EmailLogi.value;
        let passAns = PassLogi.value;
        if(emailAns === email && passAns === pass){
            alert("Succesfully Login")
            document.getElementById("HomeA").style.display = "block"
        }
        else{
            alert("Password or Email doesn't match registration Password or Email");
        }
    })
    document.querySelector("#Registering").addEventListener('click', function(){
        localStorage.setItem("Username", UsernameRegi.value)
        localStorage.setItem("Email", EmailRegi.value)
        localStorage.setItem("Password", PasswordRegi.value)
        alert("Succesfully Registered")
    })
    document.querySelector("#reset").addEventListener('click', function(){
        localStorage.clear();
        alert("All reset");
    })
})