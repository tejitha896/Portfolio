function myMenuFuction(){
    var menuBtn=document.getElementById("myNavMenu");
    if(menuBtn.className==="nav-menu"){
        menuBtn.className+="nav-menu";
    }
    else{
        menuBtn.className="nav-menu";
    }
}

window.onscroll=function(){headerShadow()};
function headerShadow(){
    const navHeader=document.getElementById("header");
    if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
        navHeader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight="70px";
    }
    else{
        navHeader.style.boxShadow="none";
        navHeader.style.height="90px";
        navHeader.style.lineHeight="90px";
    }
}

function openVideo(src) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("projectVideo");
    video.src = src;
    modal.style.display = "flex";
  }

  function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("projectVideo");
    video.pause();
    video.src = "";
    modal.style.display = "none";
  }