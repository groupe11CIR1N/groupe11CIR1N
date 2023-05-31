function zoom(){
    var image = document.getElementById("competence");

        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.2)";
        });

        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
}

function main(){
    zoom();
}

main()