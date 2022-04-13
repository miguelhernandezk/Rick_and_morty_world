/* Imports from other scripts and base consts*/
import { registerImage } from "./lazy_loading.js"
import random from "./random_images.js"
const baseUrl =  "https://rickandmortyapi.com/api/character?page="
const appNode = document.querySelector("#app")


// Create an image within a container for every element (character) we receive from the API
const createImageNode = (image_url) => {
    const container = document.createElement("div");
    container.className = "rounded-xl overflow-hidden w-full mx-auto max-w-sm max-h-64 sm:w-64 sm:m-0";

    const image = document.createElement("img");
    image.className = "w-full max-w-sm";
    image.dataset.src = image_url;  

    container.appendChild(image);

    return container;
};

// Create an image using "createImageNode" function and adds an observer (for lazy loading)
const addImage = (image_url) => {
    const newImage = createImageNode(image_url);
    registerImage(newImage);
    return newImage;
};


const fetchData = async (url) => {
    const allItems = [];
    try{
        const response =  await fetch(url);
        const data = await response.json();
        console.log(data);
        data.results.forEach(item => {
            // Create node for every character
            const image = addImage(item.image);

            // Create name
            const name = document.createElement("h2");
            name.textContent = item.name;
            name.className = "text-2xl w-full";

            // Create status
            const status_indicator = document.createElement("div"); // Small colored dot
            const status = document.createElement("span"); // Text
            status.textContent = item.status;
            switch (status.textContent){
                case "Alive":
                    status_indicator.className = "w-2 h-2 bg-green-300 rounded-full";
                    break;
                case "Dead":
                    status_indicator.className = "w-2 h-2 bg-red-500 rounded-full";
                    break;
                default:
                    status_indicator.className = "w-2 h-2 bg-yellow-500 rounded-full";
            }


            // Create species
            const species = document.createElement("span");
            species.textContent = item.species;

            // Mix colored dot, species and status in a single container
            const mix_species_status = document.createElement("span");
            mix_species_status.textContent = `${status.textContent} - ${species.textContent}`;
            mix_species_status.className = "mx-1";

            const status_container = document.createElement("div");
            status_container.className = "flex w-full centering-items";
            status_container.append(status_indicator, mix_species_status);

            // Create character origin
            const origin_name_label = document.createElement("div");
            origin_name_label.className = "text-gray-400 text-sm"
            origin_name_label.textContent = "Origin: ";
            const origin_name = document.createElement("div");
            origin_name.textContent = item.origin["name"];

            // Container for text 
            const info_container = document.createElement("div");
            info_container.append(name, status_container, origin_name_label, origin_name);
            info_container.className = "p-8 flex flex-col justify-center content-center mx-auto";
            
            // Container for image and text
            const container = document.createElement("div");
            container.append(image, info_container);
            container.className = "card rounded-xl bg-gray-700 my-4 overflow-hidden text-white w-11/12 max-w-xl mx-auto sm:flex sm:flex-row md:w-2/5 md:mx-8";

            allItems.push(container);
        });
        // Create main section and push characters.
        const main_container = document.createElement("main");
        main_container.append(...allItems);
        main_container.className = "flex flex-col md:flex-row md:flex-wrap md:justify-center";
        appNode.append(main_container);
    }
    catch(error){
        console.error(error);
    }
}

// Allows to destoy everything in DOM (within the "app" id, and load new characters
const reload = () => {
    document.querySelector("#app").removeChild(document.querySelector("main"));
    fetchData(`${baseUrl}${random()}`);    
}

const reloadButton = document.querySelector("button");
reloadButton.addEventListener("click", reload);

// Run when loading site
fetchData(`${baseUrl}${random()}`);