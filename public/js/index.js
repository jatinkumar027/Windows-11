const taskbarImage = document.getElementsByClassName('taskbarImage')[0];
const startMenu = document.getElementsByClassName('startMenu')[0];

taskbarImage.addEventListener('click',()=>{
    if(startMenu.style.bottom === "9vh"){
        startMenu.style.bottom = "-100vh"; 
    }
    else{
        startMenu.style.bottom = "9vh"; 
    }
})