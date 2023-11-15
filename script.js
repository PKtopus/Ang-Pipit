var vid_w = document.getElementById("video").getBoundingClientRect().width;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("content").style.marginLeft = "250px";
    //document.getElementById("grp_num").style.marginLeft = "270px";
    document.getElementById("grp_num").style.left = "0";
    if (window.innerWidth <500){
      document.getElementById("mySidenav").style.width = window.innerWidth +"px";
    }

    console.log(window.innerHeight);
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("content").style.marginLeft= "0";
    //document.getElementById("grp_num").style.marginLeft = "0";
    
    document.getElementById("grp_num").style.left = "70px";
    /*if (window.innerWidth >=974){
      document.getElementById("video_context").style.left = "925px";
    }*/
  }
  window.onresize = function(){
    var vid_w = document.getElementById("video").getBoundingClientRect().width;
    var root = document.querySelector(":root");
    var rootStyles = getComputedStyle(root);
    root.style.setProperty("--pos",vid_w+25+"px");
  }
  window.onload = function(){
    var vid_w = document.getElementById("video").getBoundingClientRect().width;
    var root = document.querySelector(":root");
    root.style.setProperty("--pos",vid_w+25+"px");
  }