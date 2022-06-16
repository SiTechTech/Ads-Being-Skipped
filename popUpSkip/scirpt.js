setInterval(function(){

    var skipButton = document.getElementsByClassName("ytp-ad-overlay-close-button");
    if(skipButton != undefined && skipButton.length > 0){
        console.log("Pop Up Was Skipped")
        skipButton[0].click();
        
    }
}, 1000)
