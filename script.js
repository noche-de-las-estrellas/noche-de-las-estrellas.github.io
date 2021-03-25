/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("You found the log! Congratulations! I hope you are enjoying this website I took the time to make!");

$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('.navbar').css("height")));
});

$(window).ready(function () { 
    $('body').css('padding-top', parseInt($('.navbar').css("height")));        
});

var countDownDate = new Date("April 30, 2021 19:00:00").getTime();

var x = setInterval(function() {
  var currentTime = (new Date()).getTime();
  var timeTillShow = countDownDate-currentTime;
  var seconds = Math.floor(timeTillShow/1000)%60;
  var minutes = Math.floor(timeTillShow/60000)%60;
  var hours = Math.floor(timeTillShow/3600000)%24;
  var days = Math.floor(timeTillShow/(3600000*24));
  $("#count-down-timer").text(days+"d "+hours+"h "+minutes+"m "+seconds+"s");
  
}, 1000);


