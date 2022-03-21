function menu(){
    let container = document.getElementById("container");

    if (container.classList.contains("hidden")) {
        container.classList.remove("hidden");
      } else {
        container.classList.add("hidden");
      }
}