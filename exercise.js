const isLogged = true;


//**! creiamo la prima funzione che ci ritornerà una nuova promise dove se is logged è true genererà un numero random altrimente si bloccherà e dirà false */
function chaining(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged == true){
            resolve(Math.random())
        } else {
            reject(new Error("isLogged is false"))
        }
    })
}

//**! creiamo un'altra funzione dove se il prodotto della funzione precendete è maggiore di 0.5 */


function promiseChaining(chaining) {
    return new Promise((resolve, reject) => {
        if (chaining > 0.5) {
            resolve(`{name: "John", age: 24}`)
        } else {
            reject(new Error("chaining is minor than 0.5"))
        }
    })
}

chaining(isLogged)
.then(promiseChaining)
.then((isLogged) => console.log("l'utente è online"))
.catch((error) => console.error("c'è qualcosa che non va"))
.finally(() => console.log("io funziono a prescindere"))
