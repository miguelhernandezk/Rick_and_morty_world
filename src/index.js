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


            // Create species
            const species = document.createElement("div");
            species.textContent = item.species;
            
            const container = document.createElement("div");
            container.append(image, name, species);
            container.className = "rounded-xl bg-gray-700"

            allItems.push(container); 
        });
        appNode.className = "grid grid-cols-3";
        appNode.append(...allItems);
    }
    catch(error){
        console.error(error);
    }
}

fetchData(baseUrl);