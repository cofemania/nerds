var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var link = document.querySelector(".open-modal");

link.addEventListener("click", function(event) {
    event.preventDefault;
    popup.classList.remove("modal");
    popup.classList.add("modal-open");
});

close.addEventListener("click", function(event) {
    event.preventDefault;
    popup.classList.remove("modal-open");
    popup.classList.add("modal");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popup.classList.remove("modal-open");
        popup.classList.add("modal");
    }
});