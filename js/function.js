const lock = document.getElementById("lock");
const checkBox = document.getElementById("checkBox")

checkBox.addEventListener("click", () => {
    let obtain = lock.getAttribute("type")
    if(obtain == "password"){
        lock.removeAttribute("type", "password");
        lock.setAttribute("type", "text")
    }else if(obtain == "text"){
        lock.removeAttribute("type", "text");
        lock.setAttribute("type", "password")
    }else{
        console.log('14')
    }
});