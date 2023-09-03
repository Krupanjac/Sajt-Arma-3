document.addEventListener("DOMContentLoaded", function() {
    let Birac = document.getElementById("Picker");
    let Prva = document.getElementById("TekstP");
    let Druga = document.getElementById("TekstD");
    let Treca = document.getElementById("TekstT");

    Birac.addEventListener('change', function(){
        if (Birac.value == "1") {
            Prva.style.display = "block";
            Druga.style.display = "none";
            Treca.style.display = "none";
        } else if (Birac.value == "2") {
            Prva.style.display = "none";
            Druga.style.display = "block";
            Treca.style.display = "none";
        } else if (Birac.value == "3") {
            Prva.style.display = "none";
            Druga.style.display = "none";
            Treca.style.display = "block";
        }
    });
});