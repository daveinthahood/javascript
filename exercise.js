
  function printAsyncName(name, callback){
    setTimeout(callback, 1000);
    setTimeout(() => console.log(name), 2000) //bisogna mettere il timeout perché con set interval ogni due secondi stampa 
  }

  function callback() {
    console.log("Hello");
  }

  printAsyncName("Davide", callback)