window.onload = function () {
    var nav_toggler = document.getElementById("navToggler");
    nav_toggler.onclick = function () {
        var menu = this.nextElementSibling;
        if (menu.style.display == "" || menu.style.display == "none") {
            menu.style.display = "block";
            menu.classList.add("active-now");
        } else {
            menu.style.display = "none";
        }
    }
};

window.onscroll = function () {
    if (window.scrollY > 100) {
        var menu = document.getElementById("navToggler").nextElementSibling;
        if (menu.className == "active-now") menu.style.display = "none";
    }
};

window.onresize = function () {

    var navBtn = document.getElementById("navToggler");
    var menu = navBtn.nextElementSibling;
    if (window.innerWidth > 1200) {
        if (menu.style.display == "none") {
            menu.style.display = "block";
            navBtn.style.display = "none";
        }
    } else {
        if (menu.style.display == "block" || menu.style.display == "") {
            menu.style.display = "none";
            navBtn.style.display = "inline-block";
        }
    }
}