function changeImg(){
    console.log("test")
    document.getElementById("castel").style.display = "block";
    document.getElementById("shrek").style.display = "none";   
}

window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop. behavior = 0
}