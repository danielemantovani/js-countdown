//Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
//Iniziate stampando il countdown nella console e dopo stampatelo in pagina.

const stamp = document.getElementById ("go")

let sec = 10

const countdown = setInterval (function (){
    console.log (sec);
    sec --;
    stamp.textContent = sec;

    if (sec < 0){
        clearInterval (countdown); //interrompe il countdown quando arriva a 0
        console.log ("Buon anno!")
        stamp.textContent = "Buon Anno!"
    } 
}, 1000)



