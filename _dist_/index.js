const baseUrl =  "https://rickandmortyapi.com/api/character"
const appNode = document.querySelector("#app")

const fetchData = async (url) => {
    const allItems = [];
    try{
        const response =  await fetch(url);
        const data = await response.json();
        console.log(data);
        data.results.forEach(item => {
            // Create image
            const image = document.createElement("img");
            image.src = item.image;


            // Create name
            const name = document.createElement("h2");
            name.textContent = item.name;
            name.className = "text-2xl"

            // Create status
            const status = document.createElement("span");
            status.textContent = item.status;


            // Create species
            const species = document.createElement("div");
            species.textContent = item.species;

            // Create character origin
            const origin_name = document.createElement("div");
            origin_name.textContent = item.origin["name"];
            
            const container = document.createElement("div");
            container.append(image, name, status, species, origin_name);
            container.className = "rounded-xl bg-gray-700 my-4 overflow-hidden text-white"

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