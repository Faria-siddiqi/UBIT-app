var Nav = document.getElementById("Nav");

function showmenu() {
    Nav.style.top = "0";

}
function hidemenu() {
    Nav.style.top = "-500px";

}
function formpage() {
    document.getElementById("Btn").onclick = formpage()
    {
        location.href = "formpage";
    }
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
}

function login() {
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0px"

}

function Apply() {
    window.location = "form.html"
}

function Program() {
    window.location = "program.html"
}

function contact() {
    window.location = "contact.html"
}

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");

const registerUser = () => {
    let userDetails = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        password: password.value
    }

    window.location = "register.html"
    alert(`Welcome ${userDetails.firstname} ${userDetails.lastname}`)



}

function loginsuccess() {

    window.location = "login.html"

}

