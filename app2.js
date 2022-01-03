// Variable initialization
var checker1;
var optionsButton1;
var optionEffects;
var OptionValues = [];
var QuestionValues = [];
var count = 1;
QuestionValues[1] = "Do you have any of the following pre-existing conditions?";
QuestionValues[2] = "Have you travelled in the past 14 days to any of the states";
var Options1 = ["Diabetes", "hypertension", "Lung Disease", "Heart Disease", "Kidney Disorder", "Asthma", "None of the Above"];
var Options2 = ["Yes", "No"];
var result1 = "Your infection risk is low.We recommend that you stay at home to avoid any chance of exposure to the Covid-19. Retake the Self-Assessment if you develop symptoms or come in contact with a COVID-19 confirmed patient";
var result2 = "If the information provided by you is accurate , it indicates that you are either unwell or at risk. Please contact to a doctor for appropriate treatment.";

// alert
function onStart() {
  alert("Please give correct answers\nAccurate answers help us - help you better.");
}

document.onload = onStart();

//Action on clicking on options
optionsButton1 = document.getElementsByClassName("option");
EffectsOptionsFun();
Reply(optionsButton1);

//Function dealing with action on clicking on options
function Reply(optionsButton) {
  for (var i = 0; i < optionsButton.length; i++) {
    optionsButton[i].addEventListener("click", function() {
      var element = document.querySelector(".replyDiv p");
      element.textContent = this.textContent;
      // element.textContent=event.target.value;
      element.classList.add("replyEffect");
      OptionValues.push(this.textContent);

      // "NextButton btn btn-warning btn-lg"
      document.getElementById("btn-next").classList.add("btn", "btn-warning", "btn-lg", "NextButton");
      document.getElementById("btn-next").classList.remove("NextInvisible");
      document.getElementById("btn-next").textContent = "Next";
    });

  }

}

//Function dealing with action on clicking on next
document.getElementById("btn-next").addEventListener("click", function() {
  if (count === 3) {
    Result();
  } else {

    // Printing question
    document.querySelector(".question").textContent = QuestionValues[count];

    // Printing Options
    switch (count) {
      case 1:
        console.log("first");
        checker1 = Options1;
        break;
      case 2:
        console.log("second");
        checker1 = Options2;
        break;
    }

    console.log(checker1[0]);
    console.log(checker1.length);
    for (var i = 0; i < checker1.length; i++) {
      var checker2 = ".option" + (i + 1);
      document.querySelector(checker2).innerHTML = "<button type='button' name='button' class='option'>" + checker1[i] + "</button>";
    }

    for (var i = checker1.length; i < 11; i++) {
      var checker2 = ".option" + (i + 1);
      document.querySelector(checker2).innerHTML = " ";
    }


    document.querySelector(".replyDiv p").classList.remove("replyEffect");
    document.querySelector(".replyDiv p").textContent = " ";
    document.getElementById("btn-next").classList.add("NextInvisible");

    // Setting which options to print
    console.log("Count" + count);
    count++;

    optionsButton1 = document.getElementsByClassName("option");
    EffectsOptionsFun();
    Reply(optionsButton1);
  }

});

//Function evaluating result
function Result() {
  document.querySelector(".replyDiv p").classList.remove("replyEffect");
  document.querySelector(".replyDiv p").textContent = " ";
  document.getElementById("btn-next").classList.add("NextInvisible");
  RemoveOptions();

  var result = 0;
  for (var j = 0; j < OptionValues.length; j++) {
    if (OptionValues[0] != ("None of the Above")) {
      result++;
    }
  }
  if (result == 0) {
    document.querySelector(".question").textContent = result1;
  } else {
    document.querySelector(".question").textContent = result2;
  }

  //Acknowledgement Button
  document.querySelector(".resultCLass").textContent = "Ok";
  document.querySelector(".resultCLass").classList.remove("NextInvisible");
  document.querySelector(".resultCLass").classList.add("resultReply");


}

//Redirecting home page
document.querySelector(".resultCLass").addEventListener("click", function() {
  location.replace("index.html")
});

//Removing options effect
function RemoveOptions() {
  var optionsButton2 = document.querySelectorAll(".optionDiv p");
  for (var i = 0; i < optionsButton2.length; i++) {
    optionsButton2[i].innerHTML = " ";
  }
}

// Dealing with hover
function EffectsOptionsFun() {
  optionEffects = document.querySelectorAll(".optionDiv p button");

  for (var i = 0; i < optionEffects.length; i++) {
    optionEffects[i].addEventListener("mouseover", function() {
      this.classList.toggle("option-after-effect");
    });
  }

  for (var i = 0; i < optionEffects.length; i++) {
    optionEffects[i].addEventListener("mouseout", function(event) {
      this.classList.toggle("option-after-effect");
    });
  }

}

//Dealing with hover of "ok"
document.querySelector(".resultCLass").addEventListener("mouseover", function() {
  this.classList.toggle("option-after-effect");
});

document.querySelector(".resultCLass").addEventListener("mouseout", function(event) {
  this.classList.toggle("option-after-effect");
});
