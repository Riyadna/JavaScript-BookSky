const popup_overlay = document.querySelector(".popup-overlay");
const popup_box = document.querySelector(".popup-box");
const add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click",function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})