





 




(function() {
    // Add event listener for when the user hovers over the mouse on the images
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    //  this is the interesting part of the code that sets up the images movement.
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();



   //  .
var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");


var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}











player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}


var player2 = document.getElementById("player2");
let progress2 = document.getElementById("progress2");
let playbtn2 = document.getElementById("playbtn2");
let stopbtn2 = document.getElementById("stopbtn2");
let stopbtn = document.getElementById("stopbtn");


var playpause = function () {
  if (player2.paused) {
    player2.play();
  } else {
    player2.pause();
  }
}

playbtn2.addEventListener("click", playpause);

player2.onplay = function () {
  playbtn2.classList.remove("fa-play");
  playbtn2.classList.add("fa-pause");


  
}

player2.onpause = function () {
  playbtn2.classList.add("fa-play");
  playbtn2.classList.remove("fa-pause");

}

// I created a varible of playstop assigned to the stopbtn2 that when clicked refreshes the page with the function refresh
var playstop = function Refresh() {
  window.parent.location = window.parent.location.href; {

// player2.pause(); 
// The above does stop the audio but I could not figure how to set the current time= to work 

}
  
    
}



var playstop1 = function Refresh() {
  window.parent.location = window.parent.location.href; {



}
  
    
}






stopbtn2.addEventListener("click", playstop);

player2.pauce = function () {

}

stopbtn.addEventListener("click", playstop1);

player2.pauce = function () {

}


// tracks the time to the info2 of the players using current time and duration tags
player2.ontimeupdate = function () {
  let ct = player2.currentTime;
  current2.innerHTML = timeFormat(ct);
  //progress
  let duration = player2.duration;
  prog = Math.floor((ct * 100) / duration);
  progress2.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}








  
 
 
 
 
 






