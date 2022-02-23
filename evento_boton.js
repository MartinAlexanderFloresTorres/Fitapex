/* --------------------------menu-iconos--------------------------- */
const menu_iconos = document.querySelector(".menu-iconos");
const display = document.querySelector(".display");
const item_a = document.querySelectorAll(".display ul li a");
menu_iconos.addEventListener("click", function () {
    menu_iconos.classList.toggle("active");
    display.classList.toggle("active");
});
item_a.forEach(item => {
    item.addEventListener("click", () => {
        menu_iconos.classList.remove("active");
        display.classList.remove("active");
    });
});

/* --------------------------evento de scroll header nav--------------------------- */
const scroll_header_nav = document.querySelector("#header nav");

document.addEventListener("scroll", function () {
    const valor_scroll = window.scrollY;

    if (valor_scroll > 100) {
        scroll_header_nav.style.backgroundColor = "#030505";
        scroll_header_nav.style.padding = "1% 2%";
        scroll_header_nav.style.boxShadow = "0 0 15px rgb(0 0 0 / 30%)";
        menu_iconos.style.marginRight = "20px";
    } else {
        scroll_header_nav.style.backgroundColor = "transparent";
        scroll_header_nav.style.boxShadow = "none";
        scroll_header_nav.style.padding = "1% 6%";
    }
});