import { createMainContent } from './main.js';
import { i}
const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();

    let addButton = document.createElement('button')
    document.body.appendChild(addButton)
    addButton.innerText = 'add'
    addButton.addEventListener('click', (e) => {
        fetchImage()
    })


};
