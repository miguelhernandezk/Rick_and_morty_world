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

## Asynchronous functions
⏱ Since we are requesting info from an API, we use asynchronous functions using async-await. The whole


# Snowpack Tailwind
Hello
> ✨ Bootstrapped with Create Snowpack App (CSA).

Ready-to-go template to create awesome websites using Tailwind on top of Snowpack and autopublish to GitHub pages using GitHub Actions.

- [Quick start](#quick-start)
- [Features](#features)
- [Available Scripts](#available-scripts)

## Quick start

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind

# Enable Prettier on git-commit
cd my-app
npm run install:husky

# Start the development server
npm start
```

✨ Optional: [Enable autopublish](#q-how-do-i-enable-auto-publish-to-github-pages) to get your site deployed on GitHub Pages on every commit you push.

#### Optional install using Yarn:

```sh
# Bootstrap the template into a new folder called `my-app`
npx create-snowpack-app my-app --template snowpack-template-tailwind --use-yarn

# Enable Prettier on git-commit
cd my-app
yarn install:husky
```

## Features

- Snowpack, of course.
- Tailwind.
- Prettier.
- Force prettier on git-commit.
- Autopublish on Github Pages.

### Q: How do I enable auto publish to GitHub Pages?

1. Update the value of `homepage` in `package.json`. It should look like `https://<your-username>.github.io/<your-repo-name>` (no trailing slash).
1. Push your changes into a new GitHub repository.
1. You should see an Action running on `https://github.com/<your-username>/<repo-name>/actions`
1. Make sure to [enable GitHub pages for your repo](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) and select the `gh-pages` branch
1. Give GH Pages some minutes, your site should be live on `https://<your-username>.github.io/<your-repo-name>`
1. Enjoy :)

### Q: How do I disable auto publish to GitHub Pages?

Remove the `.github/workflows/publish.yml` file.

### Q: How do I check my code syntax (Prettier) on git-commit?

Run `npm run install:husky`.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
