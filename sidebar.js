function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("hi").addEventListener("click", openNav);
document.getElementById("close").addEventListener("click", closeNav);