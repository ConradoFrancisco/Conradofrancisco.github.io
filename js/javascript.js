// mobile menu
const navBar = document.getElementById("nav-links")
const burger = document.getElementById("burger")
const bread = document.querySelectorAll(".activos")

// burger.addEventListener('click', () =>{
//     navBar.classList.toggle("is-active")
// });

// bread[1].addEventListener("click", () =>{
//     bread[1].classList.toggle("is-active")
// } )

var toggle = document.getElementById("toggle")

function mostrar(){
    if (toggle.style.display == "none;"){
        toggle.style.display = "flex"
    }else if (toggle.style.display == "flex"){
        toggle.innerHTML = ""
    }
    toggle.innerHTML = "<img src='img/codigos/python.png'>"
}

var togglers = document.querySelectorAll(".togglers")

const codigos = ["<img src='img/codigos/html.png'>","<img src='img/codigos/css.png'>","<img src='img/codigos/js.png'>","<img src='img/codigos/python.png'>","<img src='img/codigos/bulma.png'>","<img src='img/codigos/mysql.png'>"]
console.log(togglers)

for (let i = 0; i<6 ; i++){
    togglers[i].addEventListener("click",function(){
        console.log("hola")
        if (toggle.style.display == "none"){
            toggle.innerHTML = codigos[i]
            toggle.style.display = "flex"
            console.log(toggle.style.display)
        }else{
            toggle.style.display = "none"
        }
    })
}
