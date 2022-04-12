const isIntersecting =  (entry) => {
    return entry.isIntersecting; // True (inside viewport)
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;

    //Load image
    image.src = url; 

    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image)
}

