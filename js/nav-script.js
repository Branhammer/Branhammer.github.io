// KEEP TRACK OF KEYS PRESSED



function showContactPage(){
     var pageVis = document.getElementById("page-content");
     var contactVis = document.getElementById("contact-block");
     pageVis.style.visibility = "visible";
     contactVis.style.visibility = "visible";
     pageVis.style.opacity = "1";
     contactVis.style.opacity = "1";
}

function hideContactPage(){
     var pageVis = document.getElementById("page-content");
     var contactVis = document.getElementById("contact-block");
     pageVis.style.opacity = "0";
     contactVis.style.opacity = "0";
     setTimeout(function(){
          pageVis.style.visibility = "hidden";
          contactVis.style.visibility = "hidden";
     },500);    
}

function showNav(){
     var header = document.getElementById("header");
     var hide = document.getElementById("hide-nav");
     var logo = document.getElementById("logo-nav");
     var wrapper = document.getElementById("my-navbar-wrapper");
     if(hide.innerHTML == "hide menu"){
          header.style.opacity = "0";
          logo.style.opacity = "0";
          wrapper.style.opacity = "0";
          // header.style.visibility = "hidden";
          // logo.style.visibility = "hidden";
          // wrapper.style.visibility = "hidden";
          hide.style.color = "#555555";
          hide.innerHTML = "show menu";
     }else{
           header.style.opacity = "1";
          logo.style.opacity = "1";
          wrapper.style.opacity = "1";
          // header.style.visibility = "visible";
          // logo.style.visibility = "visible";
          // wrapper.style.visibility = "visible";
          hide.style.color = "#000000";
          hide.innerHTML = "hide menu";
     }
}

document.addEventListener('keydown', function(evt){
     console.log("nav-script keydown");
     var evt = evt || window.event;
     if(evt.keyCode == 77){
          showNav();
     }
},false);