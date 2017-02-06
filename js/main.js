var video = document.getElementById("video");
video.volume = 1;
var playBtn = document.getElementById("playBtn");
var voiceBtn = document.getElementById("voiceBtn");
var fullScreenBtn = document.getElementById("fullScreenBtn");

playBtn.addEventListener("click", function () {
   // alert("111");
    if(video.paused){
        video.play();
        $("#playBtn i").removeClass("iconfont icon-bofangqibofang");
        $("#playBtn i").addClass("iconfont icon-bofangqizanting");
    }else {
        video.pause();
        $("#playBtn i").removeClass("iconfont icon-bofangqizanting");
        $("#playBtn i").addClass("iconfont icon-bofangqibofang");
    }
});

voiceBtn.addEventListener("click", function () {
    // alert("111");
    if(video.volume == 1){
        video.volume = 0;
        $("#voiceBtn i").removeClass("iconfont icon-tushubofangqiyousheng");
        $("#voiceBtn i").addClass("iconfont icon-yinliangguan");
    }else {
        video.volume = 1;
        $("#voiceBtn i").removeClass("iconfont icon-yinliangguan");
        $("#voiceBtn i").addClass("iconfont icon-tushubofangqiyousheng");
    }
});

fullScreenBtn.addEventListener("click", function () {
    // alert("111");
    if(video.requestFullscreen) {
        video.requestFullscreen();
    } else if(video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if(video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
});
