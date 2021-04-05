export type ImagesTypes = {
  [key: string]: {
    title: string;
    name: string;
    github: string;
    link: string;
    desc: string;
  }
}

// Define portfolio images
const Images: ImagesTypes = {
  blogSite: {
    title: "Technology Blog",
    name: "technology-blog.png",
    github: "technology-blog",
    link: "#",
    desc: "A Technology Blog built in React with NextJS and Typescript using static site generation. Design and styling was implemented using the Material-ui library."
  },
  todoApp: {
    title: "Todo App",
    name: "todo-app.png",
    github: "react-todo-app",
    link: "https://optimistic-poitras-267ce4.netlify.app/",
    desc: "A Todo List App built in ReactJS using CRA and structured using class components. Contains a background image fetched using the Unsplash API."
  },
  countryLibrary: { 
    title: "Country Library",
    name: "country-library.png",
    github: "infinite-country-library",
    link: "https://modest-volhard-e48a9a.netlify.app/",
    desc: "A website built in vanilla HTML, CSS and Javascript which displays information regarding a specific country fetched using the countries.eu API."
  },
  currencyConverter: {
    title: "Currency Converter",
    name: "currency-converter.png",
    github: "react-currency-converter",
    link: "https://dreamy-hopper-a7849c.netlify.app/",
    desc: "A simple currency converter built in ReactJS using CRA. Currency data is fetched via the Exchange Rates API."
  },
  clickerGame: { 
    title: "Clicker Game", 
    name: "clicker-game.png",
    github: "react-clicker-game",
    link: "http://rio-clicker-game.herokuapp.com/",
    desc: "A simple clicker game built in React with Typescript using CRA. Earn points based on clicks and progress through purchasing upgrades in the shop."
  }
};

export default Images