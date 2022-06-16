setInterval(function(){

    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    if(skipButton != undefined && skipButton.length > 0){
        console.log("Ad Was Skipped")
        skipButton[0].click();
        
    }
}, 1000)



