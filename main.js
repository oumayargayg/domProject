// step1: we check if the HTML  is linkde with JS
// console.log("test if is linked")

// Declaration
var favs = Array.from(document.querySelectorAll(".fa-heart")); //tag
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus"));
var rmvBtn = document.querySelector(".Action");

// Favourites
for (let fav of favs) {
    fav.addEventListener("click", function(){
        if (fav.style.color == "red") {
            fav.style.color = "black" 
        } else {
            fav.style.color = "red"
        }
    });
}


// Delete button part 
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
}

// Add button
for ( let plusBtn of plusBtns){
    plusBtn.addEventListener("click", function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
} 

// Minus button
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function(){
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null
        total()
    })
}

// Total price
function total() {
    let qte = Array.from(document.querySelectorAll(".qute"));
    let price = Array.from(document.querySelectorAll(".unitt-price"))
    let s = 0
    for (let i = 0; i < price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s; 
}

//we have removed the loop since its not ann array its a simpl btton/document
//Remove All button
    rmvBtn.addEventListener("click", function(){
        console.log("we pressed the button");
        for (let ele in cards){
            cards[ele].remove();
        }
    })








