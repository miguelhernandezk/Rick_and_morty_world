const isIntersecting =  (entry) => {
    return entry.isIntersecting; // True (inside viewport)
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild; // Since first child is always an "img" tag, as set in "createImageNode" in index.js
    const url = image.dataset.src;

    //Load image
    image.src = url; 

    observer.unobserve(container); // Avoids reloading if image is already loaded
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image)
}

