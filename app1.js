//Action when clicked on assessment button
// <script type="text/javascript">
  Banners = new Array('image1.png','image2.jpg','image3.jpg');
  Text=new Array('COVID-19 does not see race, religion, colour, caste, creed, language or border before striking. Our response and conduct, therefore, should attach primacy to unity and brotherhood."<br /><em>Narendra Modi , Prime Minister of India.</em>','Id much rather have a vaccine than have this virus."<br /><em>Paul A volberding , MD.<br />Chief Medical Editor of Infectious Disease News.','Vaccines are a REVOLUTIONARY TECHNOLOGY.They save millions of lives."<br /><em>Bill Gates , Founder of Gates Foundation</em>');

  CurrentBanner=0;

  function DisplayBanners(){
    if(document.images){
      CurrentBanner++
      if(CurrentBanner==Banners.length){
        CurrentBanner=0
      }
      document.RotateBanner.src=Banners[CurrentBanner]
      document.getElementById("h3Text").innerHTML=Text[CurrentBanner]
      setTimeout("DisplayBanners()",3000)
    }
  }
// </script>
document.getElementById("btn-assessment").addEventListener("click", function() {
  location.replace("assessment.html")
});

//hover Effect
document.getElementById("btn-assessment").addEventListener("mouseover", function() {
  this.classList.toggle("btn-after-effect");
});

document.getElementById("btn-assessment").addEventListener("mouseout", function(event) {
  this.classList.toggle("btn-after-effect");
});
