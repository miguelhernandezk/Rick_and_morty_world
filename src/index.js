import { registerImage } from "./lazy_loading.js"
import random from "./random_images.js"
const baseUrl =  `https://rickandmortyapi.com/api/character?page=${random()}`
const appNode = document.querySelector("#app")

const createImageNode = (image_url) => {
    const container = document.createElement("div");
    container.className = "rounded-xl overflow-hidden w-full mx-auto max-w-sm max-h-64";

    const image = document.createElement("img");
    //image.width = "100";
    image.className = "w-full max-w-sm";
    image.dataset.src = image_url;  

    container.appendChild(image);

    return container;
};

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
            // Create image
            //const image = document.createElement("img");
            //image.src = item.image;
            const image = addImage(item.image);

            // Create name
            const name = document.createElement("h2");
            name.textContent = item.name;
            name.className = "text-2xl w-full";

            // Create status
            const status_indicator = document.createElement("div");
            const status = document.createElement("span");
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

            const info_container = document.createElement("div");
            info_container.append(name, status_container, origin_name_label, origin_name);
            //info_container.className = "flex";
            
            const container = document.createElement("div");
            container.append(image, info_container);
            container.className = "rounded-xl bg-gray-700 my-4 overflow-hidden text-white w-11/12 mx-auto";

            allItems.push(container); 
        });
        appNode.className = "flex flex-col";
        appNode.append(...allItems);
    }
    catch(error){
        console.error(error);
    }
}

fetchData(baseUrl);