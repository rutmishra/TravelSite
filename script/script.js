// Function for Nav bar Scrolling 
window.onscroll = function() {
    if(window.pageYOffset > 26){
      document.getElementById("nav").style.backgroundColor = "#041f1e";
      document.getElementById("nav").style.boxShadow = "0px 0px 10px rgba(0,0,0,0.8)";
      document.getElementById("nav").style.transition = "0.5s";
      document.getElementById("nav").style.position = "fixed";
      document.getElementById("nav").style.top = "0";
      document.getElementById("nav").style.width = "100%";
      document.getElementById("nav").style.zIndex = "100";
    }
    else if(window.pageYOffset < 50){
      document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.4)";
      document.getElementById("nav").style.position = "static";
      document.getElementById("nav").style.boxShadow = "none";
      document.getElementById("nav").style.transition = "0.5s";
    }
    else{
      document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.4);";
      document.getElementById("nav").style.boxShadow = "none";
      document.getElementById("nav").style.transition = "0.5s";
      document.getElementById("nav").style.position = "static";
    }
  };

//   Function for Hamburger icon clicking 
let currentStat = false;
  function showhide(){
    if(currentStat === false){
        document.getElementById("nav_menus").style.height = "auto";
        currentStat = true;
    }else{
        document.getElementById("nav_menus").style.height = "0px";
        currentStat = false;
    }
  }