function responsive(){
let responsive = document.getElementById("menu-responsive")
console.log(responsive)

if (responsive.classList.contains("hide")){
    responsive.classList.remove("hide")
} else {
    responsive.classList.add("hide");
}
}