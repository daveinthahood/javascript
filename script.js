//**! Come prima cosa per svolgere questo esercizio vado a prendere gli elementi dall'html */
const $container = document.querySelector("#container");

//**! Successivamente creo uno state dove saranno immagazzinati i dati  */

const state = {
    data:[]
}

//**! vado a prendere i dati dall'API */

const fetchData = async() => {
    //**! ho bisogno del blocco try catch */
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        state.data = await response.json()
    } catch (error) {
        console.error("error");       
    }
}

const generetaTemplateHTML = (data) => {
    return `
        <li> ${data.item} </li>
    `;
}

const renderHTML = () => {
    const HTML = state.data.map((data) => generetaTemplateHTML(data)).join("")
    $container.innerHTML= `<ul>${HTML}</ul>`;
}

const init = async () => {
    await fetchData();
    renderHTML();
}

init()