window.addEventListener("load", sidenVises);

function sidenVises(){
    hideAllScreens();
    
document.querySelector("#tema_2_knap").addEventListener("mousedown", tema2);
document.querySelector("#tema_3_knap").addEventListener("mousedown", tema3);
document.querySelector("#tema_4_knap").addEventListener("mousedown", tema4);
document.querySelector("#tema_5_knap").addEventListener("mousedown", tema5);
document.querySelector("#tema_6_knap").addEventListener("mousedown", tema6);
}

function hideAllScreens() {
    document.querySelector("#tema_2_img").classList.add("hide");
    document.querySelector("#tema_22_img").classList.add("hide");

    document.querySelector("#tema_3_img").classList.add("hide");

    document.querySelector("#tema_4_img").classList.add("hide");

    document.querySelector("#tema_5_img").classList.add("hide");
    document.querySelector("#tema_55_img").classList.add("hide");

 document.querySelector("#tema_6_img").classList.add("hide");

 document.querySelector("#website_link").classList.add("hide")
 document.querySelector("#emnesite_link").classList.add("hide")

 document.querySelector("#løsning_link").classList.add("hide")

 document.querySelector("#animation_link").classList.add("hide")

 document.querySelector("#pilotsite_link").classList.add("hide")
 document.querySelector("#redesign_link").classList.add("hide")

}

function tema2(){
    hideAllScreens();
    document.querySelector("#tema_2_img").classList.remove("hide");
    document.querySelector("#tema_22_img").classList.remove("hide");
    document.querySelector("#tema_2_knap").addEventListener("click", tema2);
    document.querySelector("#website_link").classList.remove("hide")
    document.querySelector("#emnesite_link").classList.remove("hide")
    
    
    
}

function tema3(){
    hideAllScreens();
    document.querySelector("#tema_3_img").classList.remove("hide");
    document.querySelector("#tema_3_knap").addEventListener("click", tema3);
    document.querySelector("#løsning_link").classList.remove("hide")
}


function tema4(){
    hideAllScreens();
    document.querySelector("#tema_4_img").classList.remove("hide");
    document.querySelector("#tema_4_knap").addEventListener("click", tema4);
    document.querySelector("#animation_link").classList.remove("hide")
}

function tema5(){
    hideAllScreens();
    document.querySelector("#tema_5_img").classList.remove("hide");
    document.querySelector("#tema_55_img").classList.remove("hide");
    document.querySelector("#tema_5_knap").addEventListener("click", tema5);
    document.querySelector("#pilotsite_link").classList.remove("hide")
 document.querySelector("#redesign_link").classList.remove("hide")
}

function tema6(){
    hideAllScreens();
    document.querySelector("#tema_6_img").classList.remove("hide")
    document.querySelector("#tema_6_knap").addEventListener("click", tema6)
}






