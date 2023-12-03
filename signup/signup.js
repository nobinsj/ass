// Password Show Hide
let password = document.getElementById("password");
let showhide = document.getElementById("showhide");

showhide.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    showhide.src = "/images/eye-close.svg";
  } else {
    password.type = "password";
    showhide.src = "/images/eye-open.svg";
  }
};

// Retype Password Show Hide
let repassword = document.getElementById("repassword");
let reshowhide = document.getElementById("reshowhide");

reshowhide.onclick = function () {
  if (repassword.type == "password") {
    repassword.type = "text";
    reshowhide.src = "/images/eye-close.svg";
  } else {
    repassword.type = "password";
    reshowhide.src = "/images/eye-open.svg";
  }
};
