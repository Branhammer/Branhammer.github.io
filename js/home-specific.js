window.onscroll = function(event){
     var logo = document.getElementById("logo-nav");
     var splash = document.getElementsByClassName("splash")[0];
     var content = document.getElementsByClassName("my-container")[0];
     content.style.transition = "all";

     var newPosition = (700 - (2*window.pageYOffset));
     splash.style.height =  newPosition + "px";
     content.style.top = newPosition + "px";
}