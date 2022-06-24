let miedo = document.getElementById("miedo")
let proxi = document.querySelectorAll(".proximamente")
console.log(proxi)


cant = proxi.length

for (let i = 0; i < cant; i++){
    proxi[i].addEventListener("click",function(){
        swal("Proximamente","","warning")
    })
}
miedo.addEventListener("click",function(){
    swal("puedes seguir leyendo las reglas cuantas veces quieras!","", "success")
})
