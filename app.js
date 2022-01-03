// change a height and width when onmouseover and pnmouseout

function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "100px";
}


//change a colour when onmouseover and onmouseout

function changeCol(x) {
  x.style.color = "red";
}

function normalCol(x) {
  x.style.color = "black";
}


//change a colour when onmouseover and onmouseout

function changeCol1(x) {
  x.style.color = "#172774";
}

function normalCol1(x) {
  x.style.color = "black";
}

// Show and hide div by onclick in button

function showhide()
{
    var div = document.getElementById("new");
    if (div.style.display !== "none") {
        div.style.display = "none";
        document.getElementById("button").innerHTML="show more"
        document.getElementById("verticalLine1").style.height="250px"
    }
    else {
        div.style.display = "block";
        document.getElementById("button").innerHTML="show less"
        document.getElementById("verticalLine1").style.height="500px"
    }
}

// readMore and readLess text by onclick in button

  function showText() {
    var dots = document.getElementById("dots");
    var lessText = document.getElementById("less")
    var moreText = document.getElementById("more");


    if (dots.style.display === "none") {
      dots.style.display = "inline";
      lessText.innerHTML = "Read more";
      moreText.style.display = "none";
      lessText.style.color = "blue";
    } else {
      dots.style.display = "none";
             lessText.style.color = "blue";
     lessText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

//fetch api key
fetch('https://coronavirus-19-api.herokuapp.com/countries/India')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("data1").innerHTML = data.cases;
    document.getElementById("data2").innerHTML = data.deaths;
    document.getElementById("data3").innerHTML = data.recovered;
    document.getElementById("data4").innerHTML = data.active;
    document.getElementById("data5").innerHTML = data.critical;
    document.getElementById("data6").innerHTML = data.totalTests;
  })

  //date function
  const getDate = new Date();
    document.getElementById("date").innerHTML = getDate;

//zoom youtubr video imageSize

function  zoomIn(x) {
  x.style.width = "450px";
}

function zoomOut(x) {
  x.style.width = "400px";
}

//onClick="playVideo()"
function playVideo() {
  let text = "hii";
  confirm(text);
  // if(confirm(text) == true){
  //   alert("okk");
  // }else{
  //   alert("Okk///////");
  // }
}
