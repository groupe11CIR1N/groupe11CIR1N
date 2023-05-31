// function Horloge(){
//     let temps = new Date();
//     let heures = temps.getHours();
//     let minutes = temps.getMinutes();
//     let secondes = temps.getSeconds();

//     if(heures < 10)
//         heures = "0" + heures;
//     if(minutes < 10)
//         minutes = "0" + minutes;
//     if(secondes < 10) 
//         secondes = "0" + secondes;

//     let heureActuelle = heures + ":" + minutes + ":" + secondes;

//     console.log(heureActuelle);

//     document.getElementById("Horloge").appendChild = heureActuelle;
//     setInterval("Horloge()", 1000);
// }

// function main(){
//     Horloge();
// }

// main();
var x = 0;

function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
}

function hideAll(){
    document.getElementsByTagName("header").style.visibility = "hidden";
    document.getElementsByTagName("body").style.visibility = "hidden";
    console.log("caca");
}

function loader(){
    document.getElementsByClassName("loader").style.visibility = "visible";
    setTimeout(document.getElementsByClassName("loader").style.visibility = "visible", 2000)
}

function showAll(){
    document.getElementsByTagName("header").style.visibility = "visible";
    document.getElementsByTagName("body").style.visibility = "visible";
}




function main(){
    refresh();
    showDate();
    hideAll();
    setTimeout(document.getElementById("loader").style.visibility = "hidden", 2000);
    showAll();
}


window.onload = () => {     main(); }