const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile_no = document.getElementById("mobile_no");
const adhar_no = document.getElementById("adhar_no");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    alert("Successfully Registered for Vaccination");
  }
});

function checkInputs() {
  //get the values from the inputs
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const mobile_novalue = mobile_no.value.trim();
  const adhar_novalue = adhar_no.value.trim();
  const passwordvalue = password.value.trim();
  const password2value = password2.value.trim();

  if (usernamevalue === "") {
    setErrorFor(username, "User name cannot be blank");
    return false;
  } else {
    setSuccessFor(username);
  }

  if (emailvalue === "") {
    setErrorFor(email, "Email cannot be blank");
    return false;
  } else if (!isEmail(emailvalue)) {
    setErrorFor(email, "Not a valid email");
    return false;
  } else {
    setSuccessFor(email);
  }

  if (mobile_novalue === "") {
    setErrorFor(mobile_no, "Mobile Number cannot be blank");
    return false;
  } else if (isNaN(mobile_novalue)) {
    setErrorFor(mobile_no, "Mobile Number must be integer");
    return false;
  } else if (isMobile_no(mobile_novalue)) {
    setErrorFor(mobile_no, "Mobile Number must be 10 digits only");
    return false;
  } else {
    setSuccessFor(mobile_no);
  }

  if (adhar_novalue === "") {
    setErrorFor(adhar_no, "Adhaar Number cannot be blank");
    return false;
  } else if (isNaN(adhar_novalue)) {
    setErrorFor(adhar_no, "Adhaar Number must be integer");
    return false;
  } else if (isAdhar_no(adhar_novalue)) {
    setErrorFor(adhar_no, "Adhar Number must be 12 digits only");
    return false;
  } else {
    setSuccessFor(adhar_no);
  }

  if (passwordvalue === "") {
    setErrorFor(password, "Password cannot be blank");
    return false;
  } else {
    setSuccessFor(password);
  }

  if (password2value === "") {
    setErrorFor(password2, "Password cannot be blank");
    return false;
  } else if (passwordvalue !== password2value) {
    setErrorFor(password2, "Passwords does not match");
    return false;
  } else {
    setSuccessFor(password2);
  }

  return true;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isMobile_no(mobile_no) {
  if (mobile_no.length !== 10) {
    return true;
  }
}
function isAdhar_no(adhar_no) {
  if (adhar_no.length !== 12) {
    return true;
  }
}
