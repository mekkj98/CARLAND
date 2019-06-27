window.onload = function () {
    var nav_toggler = document.getElementById("navToggler");
    nav_toggler.onclick = function () {
        var menu = this.nextElementSibling;
        if (menu.style.display == "" || menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }
}

window.onscroll = function () {
    if (window.scrollY > 100); {
        document.getElementById("navToggler").nextElementSibling.style.display = "none";
    }
}