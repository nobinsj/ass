// get-password
let password = document.getElementById("password"); 

// get-show,hide-icon
let showhide = document.getElementById("showhide");


//toggle show hide function
showhide.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    showhide.src = "images/eye-close.svg";
  } else {
    password.type = "password";
    showhide.src = "images/eye-open.svg";
  }
};


// login successfull
function LoggedIn() {
  window.location.href = "/home/home.html";
}



//open nav items 
function MenuOpen() {
  document.getElementById("menu-open").style.display = "none";
  document.getElementById("menu-close").style.display = "block";
  document.getElementById("nav-items").style.display = "flex";
}

function MenuClose() {
  document.getElementById("menu-open").style.display = "block";
  document.getElementById("menu-close").style.display = "none";
  document.getElementById("nav-items").style.display = "none";
}


//logout button
function LogOut() {
  var element = document.getElementById("logout");

  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}


//logout function
function LoggedOut() {
  window.location.href = "/";
}