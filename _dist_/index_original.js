/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl =  "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app")


// web API fetch
// 1. Nos conectamos al servidor. 
// 2. Procesar la respuesta y convertirla a JSON
// 3. JSON --> Data --> Renderizar info en el browser
window
    .fetch(`${baseUrl}/api/avo`)
    // Aquì es donde procesamos la respuesta y la convertimos a un JSON
    .then((respuesta) => respuesta.json())
    // En el JSOn devuelvo info pura.
    .then (responseJson => {
        console.log(responseJson);
        const todosLosItems = [];
        responseJson.data.forEach( item  => {
            // Crear imagen
            const image = document.createElement("img");
            image.src = `${baseUrl}${item.image}`;


            // Creat título
            const title = document.createElement("h2");
            title.textContent = item.name;
            // title.style = "font-size: 2rem";
            // title.style.fontSize = "3rem";
            title.className = "muy-grande";


            // Crear precio
            const price = document.createElement("div");
            price.textContent = item.price;
            
            const container = document.createElement("div");
            container.append(image, title, price);

            todosLosItems.push(container); 
            /*  container.appendChild(image);
                container.appendChild(title);                    
                container.appendChild(price);
            */
            //document.body.appendChild(container);

        });
        appNode.append(...todosLosItems);
    });