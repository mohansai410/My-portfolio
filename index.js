function clicked(id) {
    // remove style from all nav links
    let links = document.querySelectorAll(".n-right a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "";
        links[i].style.color = "";
        links[i].style.borderRadius = "";
    }

    // add style to clicked one
    let current = document.getElementById(id);
    current.style.backgroundColor = "white";
    current.style.color = "black";
    current.style.borderRadius = "8px";
    
}
