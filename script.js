let centers = [];
const cards = document.querySelector(".cards");
const searchBtn = document.querySelector(".searchBox").querySelector("button");

let today, d, m, y;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
y = today.getFullYear();
today = `${d}-${m}-${y}`;


// https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=411045&date=24-12-2021

function cowinData(pincode) {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      
      if(data.sessions !== []){
        data.sessions.map((e, i) => {
          let centerInfo = [
            e.name,
            e.address,
            e.vaccine,
            e.date,
            e.min_age_limit,
            e.available_capacity,
            e.block_name,
            e.district_name,
            e.slots,
          ];
          centers.push(centerInfo);
          let code = `
      <div class="card">
      <h1>
      <span class="category">Center Name - </span>
      ${centers[i][0]}
    </h1>
    <div class="innerCard">
    <h3>
    <span class="category">Center Address - </span>
    ${centers[i][1]}
  </h3>
  <h3>
    <span class="category">Vaccine Name - </span>
    ${centers[i][2]}
  </h3>
  <h3>
    <span class="category">Date Of Vaccination - </span>
    ${centers[i][3]}
  </h3>
  <h3>
    <span class="category">Minimum Age Limit - </span>
    ${centers[i][4]}
  </h3>
  <h3>
    <span class="category">Available Capacity - </span>
    ${centers[i][5]}
  </h3>
  <h3>
    <span class="category">Block Name - </span>
    ${centers[i][6]}
  </h3>
  <h3>
    <span class="category">District Name - </span>
    ${centers[i][7]}
  </h3>
  <h3>
    <span class="category">Available Slots - </span>
     ${centers[i][8].join(" | ")}
  </h3>
    </div>
    </div>`;
          cards.innerHTML += code;
        });
        // console.log(data.sessions.length);
        if(data.sessions.length === 0){
          alert("No Vaccinations Available")
        }
        centers = []
      } 


    } else{
        alert("Some error occured")
    }
  };

  xhr.send();
}

const input = document.querySelector("#input")
input.addEventListener("keypress", (e) => {
    if (e.which === 13) {
        let pincode = input.value;
        cards.innerHTML = "";
        if (pincode === "") {
            alert("Enter pincode in the search box")
        } else if (pincode !== "") {
            cowinData(pincode)
        }
}})

searchBtn.addEventListener("click",() => {
        let pincode = input.value;
        cards.innerHTML = "";
        if (pincode === "") {
            alert("Enter pincode in the search box")
        } else if (pincode !== "") {
            cowinData(pincode)
        }
})

// cowinData(110001);
// cowinData(462030);


//form validation

function validation(){

  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;
  var confirmpass = document.getElementById('conpass').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var adharNumber = document.getElementById('adharNumber').value;
  var emails = document.getElementById('emails').value;
  // var District = document.getElementById('District').value;



  if(user == ""){
    document.getElementById('username').innerHTML =" ** Please fill the username field";
    return false;
  }
  if((user.length <= 2) || (user.length > 20)) {
    document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
    return false;	
  }
  if(!isNaN(user)){
    document.getElementById('username').innerHTML =" ** only characters are allowed";
    return false;
  }







  if(pass == ""){
    document.getElementById('passwords').innerHTML =" ** Please fill the password field";
    return false;
  }
  if((pass.length <= 5) || (pass.length > 20)) {
    document.getElementById('passwords').innerHTML =" ** Passwords lenght must be between  5 and 20";
    return false;	
  }


  if(pass!=confirmpass){
    document.getElementById('confrmpass').innerHTML =" ** Password does not match the confirm password";
    return false;
  }



  if(confirmpass == ""){
    document.getElementById('confrmpass').innerHTML =" ** Please fill the confirmpassword field";
    return false;
  }

  if(adharNumber == ""){
    document.getElementById('adharno').innerHTML =" ** Please fill the adhar NUmber field";
    return false;
  }
  if(isNaN(adharNumber)){
    document.getElementById('adharno').innerHTML =" ** user must write digits only not characters";
    return false;
  }
  if(adharNumber.length!=12){
    document.getElementById('adharno').innerHTML =" ** Adhar Number must be 12 digits only";
    return false;
  }

  

  if(mobileNumber == ""){
    document.getElementById('mobileno').innerHTML =" ** Please fill the mobile NUmber field";
    return false;
  }
  if(isNaN(mobileNumber)){
    document.getElementById('mobileno').innerHTML =" ** user must write digits only not characters";
    return false;
  }
  if(mobileNumber.length!=10){
    document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
    return false;
  }



  if(emails == ""){
    document.getElementById('emailids').innerHTML =" ** Please fill the email idx` field";
    return false;
  }
  if(emails.indexOf('@') <= 0 ){
    document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
    return false;
  }

  if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
    document.getElementById('emailids').innerHTML =" ** . Invalid Position";
    return false;
  }

  // if(isNaN(District)){
  //   document.getElementById('District_err').innerHTML =" ** Select your country from the list";
  //   return false;
  // }

  
}



  