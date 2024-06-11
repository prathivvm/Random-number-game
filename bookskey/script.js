//selecting popup box, popup overlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add popup-button")
 
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//selecting cancel button
var cancelpopup=document.getElementById("cancel-popub")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// selecting container,Add book,book-title-input,book-title-author,book-description
var container=document.querySelector(".container")
var addbook=document.getElementById("Add book")
var booktitleinput=document.getElementById("book-title-input")
var booktitleauthor=document.getElementById("book-title-author")
var bookdescription=document.getElementById("book-description")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${booktitleauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)" >delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}