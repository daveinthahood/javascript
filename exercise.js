function printName() { //funzione con variebile helloName
    let helloName = "Hello John";
    function inner () { //funzione con return helloName
        return helloName;
    }
    return inner; //retur inner 
}

console.log(printName()())