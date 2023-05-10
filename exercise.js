function printName() { //funzione con variebile helloName
    let helloName = "Hello John";
    function inner () { //funzione con return helloName
        setTimeout(() => { //usiamo setTimeout 
            console.log(helloName);
        }, 1000);
    }
    return inner; //retur inner 
}

console.log(printName()())