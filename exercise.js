

const repeatHello = () => {
   const ciao = setInterval(() => {
        console.log("Hello");
    }, 1000);

    setTimeout(() => clearInterval(ciao), 5000)}
repeatHello()