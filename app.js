const btn = document.querySelector(".btn");
const bellIcon = document.querySelector(".fa-bell")

btn.addEventListener("click" , ()=>{
    if(btn.textContent == "SUBSCRIBE"){
        btn.textContent = "SUBSCRIBED"
        btn.classList.add("active")
        bellIcon.classList.add("active")
    }
    else{
        btn.textContent = "SUBSCRIBE"
        btn.classList.remove("active")
        bellIcon.classList.remove("active")
    }
})
