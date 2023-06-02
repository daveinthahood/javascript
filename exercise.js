const number = 15;

//**! la promise è una promessa di esecuzione del codice */
//**! i parametri che la promise accetta sono un parametro di esecuzione ed uno di rigetto */


let promise = new Promise ((resolve, reject) => {
    if (number > 10){
        resolve(number);
    } else{
        reject(number)
    }
});

promise 
.then((number) => console.log("il numero è maggiore di 10")) //**? in questo caso stamperà qui perché il numero è maggiore di 10 
.catch((error) => console.error("il numero è minore di 10 ")) //**! ho utilizzato il console.error cosi da mettere in risalto l'errore se il numero fosse stato minore di 10  */

