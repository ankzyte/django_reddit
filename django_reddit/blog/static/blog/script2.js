let profileButton = document.querySelector('.profile-button');
let profileMenu = document.querySelector('.profile-menu');
let dropdown = document.querySelectorAll(".dropdown");
let dropdownContent = document.querySelectorAll(".dropdown-content");
let arrow = document.querySelectorAll(".bx-chevron-up");
let currentPath = window.location.pathname;
let tab = document.querySelector(".tabs");
let postBody = document.querySelector("#id_body");
let postImage = document.querySelector(".post-image");

profileButton.addEventListener("click",()=>{
    var computedStyle = window.getComputedStyle(profileMenu);
    if(computedStyle.display=="none"){
        profileMenu.style.display="block";
    }
    else if(computedStyle.display=="block"){
        profileMenu.style.display="none";
    }
});

for(let i=0;i<dropdown.length;i++){
    if(i==0){
        dropdownContent[0].style.display="block";
    }
    else if(i==dropdown.length-1){
        dropdownContent[i].style.display="block";      
    }
    else{
        dropdownContent[i].style.display="none";
        arrow[i].style.transform = "rotate(180deg)";
    }
    dropdown[i].addEventListener("click",()=>{
        if(dropdownContent[i].style.display=="block"){
            dropdownContent[i].style.display="none";
            arrow[i].style.transform = "rotate(180deg)";
        }
        else if(dropdownContent[i].style.display=="none"){
            dropdownContent[i].style.display="block";
            arrow[i].style.transform = "rotate(0deg)";
        }      
    });
}

if(currentPath=="/user/"){
    let flag=0;
    let children = tab.children;
    for(let i=0;i<children.length;i++){
        children[i].addEventListener('click',()=>{
            children[flag].classList.remove("active");
            children[i].classList.add("active");
            flag=i;
        })
    }
}

if(currentPath=="/submit/" || currentPath=="/user/submit/"){
    let flag=0;
    let children = tab.children;
    for(let i=0;i<children.length;i++){
        children[i].addEventListener('click',()=>{
            children[flag].classList.remove("active");
            children[i].classList.add("active");
            flag=i;
            if(flag==1){
                postBody.style.display = "none";
                postImage.style.display = "flex";
            }
            else{
                postBody.style.display = "block";
                postImage.style.display = "none";
            }
        })
    }
}