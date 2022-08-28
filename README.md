# GitCrow

## Description:
Website for searching users, via github api, and avaiable information about their work and contributions 

## Tools:
* Vite (React with Typescript);
* Tailwind Css;
* Apollo Client;
* Github API Graphql;
* Phosphor React;
* AntDesign Charts

## Instation:
If you have nvm installed on your machine, it is recommended to use the following command to use the project node version:
`nvm use`  
In the root directory, type the following command to install all dependecies:  
`npm install`  
After that, create a `.env.local` file containing two essential pieces of informations: your own Github token and the Github API url.    
To create the specific token to access and query data in API, see the instruction in this link: [Creating a Personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)  
API URL: `https://api.github.com/graphql`  
**To understand how to declare envionment variables in Vite, check out this link: [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)**  
Finally, run the application with the following command:  
`npm run dev`
