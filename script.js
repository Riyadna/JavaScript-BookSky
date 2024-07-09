const popup_overlay = document.querySelector(".popup-overlay");
const popup_box = document.querySelector(".popup-box");
const add_popup_button = document.getElementById("add-popup-button")
const cancel_popup = document.getElementById("cancel-popup");

add_popup_button.addEventListener("click",function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

cancel_popup.addEventListener("click",function(){
    event.preventDefault();
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

const book_title_input = document.getElementById("book-title-input");
const book_author_input = document.getElementById("book-author-input");
const book_description_input = document.getElementById("book-description-input");
const add_book = document.getElementById("add-book");
const container = document.querySelector(".container");

add_book.addEventListener("click",function(event){
    event.preventDefault();
    const div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h1>${book_title_input.value}</h1>
    <h5>${book_author_input.value}</h5
    <p>${book_description_input.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div); 
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove();
}