let dropdown = document.querySelectorAll(".dropdown");
let dropdownContent = document.querySelectorAll(".dropdown-content");
let arrow = document.querySelectorAll(".bx-chevron-up");
let settingsButton = document.querySelector(".settings-button");
let settingsMenu = document.querySelector(".settings-menu");
let loginButton = document.querySelector(".button2");
let loginMenu = document.querySelector(".login-menu");
let signupMenu = document.querySelector(".signup-menu");
let exitMenu = document.querySelectorAll(".bx-x");
let switchMenu = document.querySelectorAll(".switch-menu");
let loginForm = document.querySelector('#login-form');
let altLoginButton = document.querySelector('.alt-login');

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

settingsButton.addEventListener("click",()=>{
    var computedStyle = window.getComputedStyle(settingsMenu);
    if(computedStyle.display=="none"){
        settingsMenu.style.display="block";
        altLoginButton.addEventListener("click",()=>{     
            console.log(2);
            loginMenu.style.display="flex";
            exitMenu[0].addEventListener("click",()=>{
                loginMenu.style.display = "none";
            });
            exitMenu[1].addEventListener("click",()=>{
                signupMenu.style.display="none";
            });
            switchMenu[0].addEventListener("click",()=>{
                loginMenu.style.display="none";
                signupMenu.style.display="flex";
            });
            switchMenu[1].addEventListener("click",()=>{
                signupMenu.style.display="none";
                loginMenu.style.display="flex";
            });
        
        });
    }
    else if(computedStyle.display=="block"){
        settingsMenu.style.display="none";
    }
    
});



loginButton.addEventListener("click",()=>{     
    loginMenu.style.display="flex";
    exitMenu[0].addEventListener("click",()=>{
        loginMenu.style.display = "none";
    });
    exitMenu[1].addEventListener("click",()=>{
        signupMenu.style.display="none";
    });
    switchMenu[0].addEventListener("click",()=>{
        loginMenu.style.display="none";
        signupMenu.style.display="flex";
    });
    switchMenu[1].addEventListener("click",()=>{
        signupMenu.style.display="none";
        loginMenu.style.display="flex";
    });

});


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Check if the cookie name matches the specified name
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                // Extract and decode the cookie value
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');
            // Create the fetch request

