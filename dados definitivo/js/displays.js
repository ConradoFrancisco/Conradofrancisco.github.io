let display = document.getElementById("display")
let botonJugador = document.querySelectorAll(".botonjugador")
console.dir(botonJugador)
let valorInput;
let nombres = document.getElementById("nombrejugadores")
let cantj = document.getElementById("cantj")
let interfaz = document.getElementById("interfaz")
var input;
let columna;
var jugadores;
var players = []
let fragment = new DocumentFragment()
var tr;
var th;
var td;
var tds;
var ths;
var td1;
var td2;
let tbody = document.getElementById("tbody")
let ready = document.getElementById("ready")
var puntaparcial;
let puntafinal;
let puntajeTotal = []
for (let i = 0; i < 5; i++){
    botonJugador[i].addEventListener('click', function(){
        valorInput = botonJugador[i].innerHTML
         
        for (let v = 0; v < valorInput;v++){
            puntajeTotal.push(0) 
}               
        display.style.display = "none"
        console.log(valorInput)
        nombres.style.display = "block"
        for (var x = 0; x < valorInput; x++){
            input = document.createElement("input")
            columna = document.createElement("div")
            columna.classList.add("column")
            input.classList.add("input")
            input.classList.add("is-medium")
            input.classList.add("is-primary")   
            input.classList.add("jugadores")          
            input.setAttribute("type", "text")
            input.setAttribute("placeholder", `Jugador Nº${x + 1}`)
            columna.appendChild(input)
            fragment.appendChild(columna)           
        }
           cantj.appendChild(fragment)                    
    })
}
var con = 0
const Iniciar = () =>{
    nombres.style.display = "none"
    interfaz.style.display = "block"
    jugadores = document.querySelectorAll(".jugadores")
    for (let y = 0 ; y < valorInput; y++){
        players[y] = jugadores[y].value
        
    }
    players.forEach(function(jugador){
        tr = document.createElement("tr")
        th = document.createElement("th")
        tr.appendChild(th)
        tbody.appendChild(tr)
        th.innerHTML = con + 1
        con++
        td = document.createElement("td")
        td.innerHTML = jugador
        tr.appendChild(td)
        // for ( let i = 0; i < 2; i++){
            td = document.createElement("td")
            td.classList.add("puntajeparcial")
            td.innerHTML = 0
            tr.appendChild(td)
            td1 = document.createElement("td")
            td1.classList.add("puntajefinal")
            td1.innerHTML = 0
            tr.appendChild(td1)
            puntaparcial = document.querySelectorAll(".puntajeparcial")
            puntafinal = document.querySelectorAll(".puntajefinal")
        // }           
    })
    
}

ready.addEventListener("click", Iniciar)


let player = document.getElementById("jugador")
let comenzar = document.getElementById("comenzar")
let turnotxt = document.getElementById("turnotxt")
let botones = document.getElementById("botones")
comenzar.addEventListener("click", function(){
    comenzar.style.display = "none"
    turnotxt.style.display = "block"
    botones.style.display = "flex"
    player.innerHTML = players[jugador]
    console.log(puntajeTotal)
})

/* COMENZAMOS CON LA LOGICA DEL JUEGO */

let dado = document.querySelectorAll(".dado")
let cantDados = 6
let puntajeParcial = 0


let jugador = 0
let punta;
function TirarDados(){
    let cont = 0
    let i = 0
    let numeros = []
    for (let a = 0; a<6; a++)
    {
        dado[a].innerHTML  = "" 
    }

    while(i < cantDados )
    {
        let numeroAleatorio = Math.random(0,5)
        let numero = Math.round((numeroAleatorio*5) + 1 )
        dado[i].innerHTML = '<img src="imagenes/dados/dado'+numero+'.png">'
        numeros.push(numero)
        if (numero == 5)
        {
            cont++
            puntajeParcial += 50
        }
        else if (numero == 1)
        {
            cont++
            puntajeParcial += 100
        };
        
        i++
    };
    numeros.sort()
    let numerosRepetidos = []
    let cantRepeteciones = []
    let contador = 1
    for ( let i = 0 ; i < numeros.length; i++){
        if (numeros[i] === numeros[i+1]){
            contador++
        }else{
            numerosRepetidos.push(numeros[i])
            cantRepeteciones.push(contador)
            contador = 1
        }
    }
    for (let x = 0 ; x < cantDados - 1 ; x++){
        // PUNTAJES PARA MULTIPLES UNOS
        if(cantRepeteciones[x] == 6 && numerosRepetidos[x] == 1){
            puntajeParcial += 8000 - 600
            
        }
        else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 1){
            puntajeParcial += 4000 - 500
            
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 1){
            puntajeParcial += 2000 - 400
            
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 1){
            puntajeParcial += 1000 - 300
            
        }
        // OPCIONES PARA MULTIPLES 2
        else if (cantRepeteciones[x] == 6 && numerosRepetidos[x] == 2){
            puntajeParcial += 1600
            cont += 6
        }
        else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 2){
            puntajeParcial += 800
            cont += 5
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 2){
            puntajeParcial += 400
            cont += 4
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 2){
            puntajeParcial += 200
            cont += 3
        }
        // OPCIONES PARA MULTIPLES 3
        else if (cantRepeteciones[x] == 6 && numerosRepetidos[x] == 3){
            puntajeParcial += 2400
            cont += 6
        }
        else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 3){
            puntajeParcial += 1200
            cont += 5
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 3){
            puntajeParcial += 600
            cont += 4
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 3){
            puntajeParcial += 300
            cont += 3
        }
        // OPCIONES PARA MULTIPLES 4
        else if (cantRepeteciones[x] == 6 && numerosRepetidos[x] == 4){
            puntajeParcial += 3200
            cont += 6
        }
        else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 4){
            puntajeParcial += 1600
            cont += 5
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 4){
            puntajeParcial += 800
            cont += 4
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 4){
            puntajeParcial += 400
            cont += 3
        }
        // OPCIONES PARA MULTIPLES 5
        else if (cantRepeteciones[x] == 6 && numerosRepetidos[x] == 5){
            puntajeParcial +=  4000 - 300
            
        }else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 5){
            puntajeParcial +=  2000 - 250
            
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 5){
            puntajeParcial +=  1000 - 200
            
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 5){
            puntajeParcial +=  500 - 150
            
        }
        // OPCIONES PARA MULTIPLES 6
        else if (cantRepeteciones[x] == 6 && numerosRepetidos[x] == 6){
            puntajeParcial +=  4800
            cont += 6
        }
        else if (cantRepeteciones[x] == 5 && numerosRepetidos[x] == 6){
            puntajeParcial +=  2400
            cont += 5
        }
        else if (cantRepeteciones[x] == 4 && numerosRepetidos[x] == 6){
            puntajeParcial +=  1200
            cont += 4
        }
        else if (cantRepeteciones[x] == 3 && numerosRepetidos[x] == 6){
            puntajeParcial +=  600
            cont += 3
        }
        
        puntaparcial[jugador].innerHTML = puntajeParcial
    }
    if (cont != 0)
    {
        cantDados -= cont
        if (cantDados == 0)
        {
            cantDados = 6
        }
    }else{
        
        puntajeParcial = 0
        puntaparcial[jugador].innerHTML = puntajeParcial
        cantDados = 6
        if (jugador == valorInput - 1){
            jugador = 0
            
            swal ("CUACK!",`No estas con suerte!, es el turno de ${players[jugador]}`,"error")
            player.innerHTML = players[jugador]
            
        }else{
            jugador++
            
            swal ("CUACK!",`No estas con suerte!, es el turno de ${players[jugador]}`,"error")
            player.innerHTML = players[jugador]
            
        }
    }
}

function retirarse(){
    
    if (puntajeParcial < 450 && puntajeTotal[jugador] < 450){
        swal("OOPS!","Debes acumular 450 puntos por una unica vez antes de empezar a sumar!","warning")
    }else{
        puntajeTotal[jugador] += puntajeParcial
        if (puntajeTotal[jugador] >= 10000){
            swal(`FELICITACIONES ${players[jugador]} GANASTE` ,"","success")
            puntafinal[jugador].innerHTML = puntajeTotal[jugador]
        }else{
            if (jugador == valorInput -1){
                puntafinal[jugador].innerHTML = puntajeTotal[jugador]
                puntaparcial[jugador].innerHTML = "0"  
                jugador = 0
                swal(`Te retiraste y sumaste ${puntajeParcial} puntos`,`Es el turno de ${players[jugador]}`,"success")
                player.innerHTML = players[jugador]
                                  
            }else{
                puntafinal[jugador].innerHTML = puntajeTotal[jugador]
                
                
                puntaparcial[jugador].innerHTML = "0"
                jugador++
                swal(`Te retiraste y sumaste ${puntajeParcial} puntos`,`Es el turno de ${players[jugador]}`,"success")
                player.innerHTML = players[jugador]
            }
        }   cantDados = 6 
            puntajeParcial = 0
        }
        
    
}

