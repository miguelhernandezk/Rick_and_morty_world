# The Rick and Morty world.
> 🙉 This is a portfolio project created using the [Rick and Morty API](https://rickandmortyapi.com/). You can find previus work on my profile. 

<p align="center">
<a href="https://www.instagram.com/miguelhmx/" target="_blank">
  <img alt="Miguel's Instagram" width="22px" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
</a>
<a href="https://twitter.com/@miguelhmx" target="_blank">
  <img alt="Miguel Hernández | Twitter" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/twitter.svg" />
</a>
<a href="https://www.linkedin.com/in/miguelhmx/" target="_blank">
  <img alt="Miguel's LinkedIN" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
</a>

[![Mike's GitHub stats](https://github-readme-stats.vercel.app/api?username=miguelhernandezk&show_icons=true)](https://github.com/miguelhernandezk/github-readme-stats)
</p>


# Features

- [DOM Manipulation](#dom-manipulation)
- [Asynchronous functions](#Asynchronous-functions)
- [API Requests](#api-requests)
- [Lazy Loading](#lazy-loading)
- [Mobile First Design](#Mobile-first-design)


## Dom Manipulation
`DOM manipulation` is the main feature of this project. There is an `index.html` file which contains a few lines to start with. The rest is rendered on the screen using JavaScript and requesting info from the  Rick and Morty API. 

> Every time you hit the "See more swchiwty characters" the whole section is "destroyed" and a new one is created and rendered.

## Asynchronous functions
⏱ Since we are requesting info from an API, we use asynchronous functions (async-await, ECMAScript 6). The whole web-app is rendered in this section. 

## API Requests
When entering the site, JavaScript will request info from the Rick and Morty API. This info includes, but it is not limited to:
- Character name
- Character origin
- Character species.

Since the API is divided into different sections (or pages), we generate a random number to acces a different page from the API everytime you reload the site. This also allows different characters to be displayed every time you hit the "See more schwifty characters" button. 

## Lazy Loading
I know, I know. This is not a complex web app. But this site is meant to show my skills. Lazy loading is usually implemented when we need to save mobile data. I used an intersection observer in order to know when the `img tag` enters the viewport. When this happens, the picture is loaded. 

## Mobile first design
The site is responsive. By the time I'm writing this, I'm not a designer myself, but I tried to copy the original designs from the Rick and Morty API. So, yes. This project is responsive. This was achieved by using the Tailwind framework for CSS. 
