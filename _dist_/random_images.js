const maximum_pages = 42
const minimum_pages = 1
const random = () => Math.floor(Math.random() * (maximum_pages - minimum_pages)) + minimum_pages;

export default random;