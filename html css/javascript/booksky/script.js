var overlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
function plus(){
    overlay.style.display="block"
    popupbox.style.display="block"
}
var cancelpop=document.getElementById("cancel-popup")
cancelpop.addEventListener("click",function(event){
    event.preventDefault();
      overlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbook=document.getElementById("add-book")
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h3> ${booktitleinput.value} </h3> <h5>${bookauthorinput.value}</h5> <p>${bookdescriptioninput.value}</p>   <button onclick="deletion(event)">Delete</button>`
    container.append(div)
     overlay.style.display="none"
    popupbox.style.display="none"
})
function deletion(event){
          event.target.parentElement.remove()
}