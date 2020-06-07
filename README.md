# Emilia Paz personal website

This is my personal website using React, Gatsby, TypeScript and SCSS.
https://emiliapaz.github.io/

## Quick start

> A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

1.  **Create a Gatsby site.**

    Install `gatsby-cli` package globally on your machine.

    ```bash
    # using NPM
    npm install -g gatsby-cli

    # using YARN
    yarn global add gatsby-cli
    ```

2.  **Start developing.**

    Move to project's directory. The application lives in the `src/` directory. Make sure you are in the react-gatsby branch for develop.

    ```bash
    cd project-name/
    ```

    To view your site locally run the following command and open http://localhost:8000/

    ```bash
    # using npm
    npm start

    # using yarn
    yarn start
    ```

3.  **Deploy your app to Github pages!**

    To deploy, make sure you are in the react-gatsby branch. Since we are deployinh to GitHub pages, we need to build it from the master branch. This means the master branch will be cluttered with files. Therefore, we will work locally from react-gatsby branch, and the use gh-pages to deploy to master on remote.

    ```bash
    # using npm
    npm run deploy

    # using yarn
    yarn deploy
    ```
