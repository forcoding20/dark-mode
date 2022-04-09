function DarkMode() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
    document.getElementById("nav").style.color = "white";
    document.getElementById("nav-2").style.color = "white";
    document.getElementById("nav-3").style.color = "white";
    document.getElementById("more").style.backgroundColor = "white";
    document.getElementById("more").style.color = "black";

    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
}


function LightMode() {
    document.getElementById("body").style.backgroundColor = "#ecf4ff";
    document.getElementById("body").style.color = "black";
    document.getElementById("nav").style.color = "black";
    document.getElementById("nav-2").style.color = "black";
    document.getElementById("nav-3").style.color = "black";
    document.getElementById("more").style.backgroundColor = "black";
    document.getElementById("more").style.color = "white";

    document.getElementById("light").style.display = "none";
    document.getElementById("dark").style.display = "block";
}