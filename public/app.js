var Nav = document.getElementById("Nav");

function showmenu() {
    Nav.style.top = "0";

}
function hidemenu() {
    Nav.style.top = "-600px";

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



function Apply() {
    window.location = "form.html"
}

function Program() {
    window.location = "program.html"
}

function contact() {
    window.location = "contact.html"
}

let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");

const registerUser = () => {




    if (fname.value === "") {
        alert("Fill the empty places")
    } else if (lname.value === "") {
        alert("Fill the empty places")
    }
    else if (email.value === "") {
        alert("Fill the empty places")
    }
    else if (password.value === "") {
        alert("Fill the empty places")
    }

    else {
        alert(`Welcome ${fname.value} ${lname.value}`)
    }

    window.location = "register.html"

}



let useremail = document.getElementById("InputEmail1");
let pass = document.getElementById("formPass");
const loginUser = () => {



    if (useremail.value === "") {
        alert("Fill the empty places")
    } else if (pass.value === "") {
        alert("Fill the empty places")
    }
    else {
        alert(`Welcome ${useremail.value}`);
    }

    window.location = "login.html";

}
