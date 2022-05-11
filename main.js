//Initial API investigation
console.log("main.js is running...");

//Creates a random number for the Pokedex ID
const randomInteger = Math.floor(Math.random() * 151) + 1;
console.log(randomInteger);

//Pulls the name (capitalizes the first letter) and front sprite
async function pokemonAPI() {
  //Connects with the API
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomInteger}/`
  );
  let data = await response.json();
  console.log(data);
  //Takes the name data and capitalizes the first letter
  let userNameSplit = Object.assign([], data.name);
  userNameSplit[0] = userNameSplit[0].toUpperCase();
  let userName = userNameSplit.join("");
  //Takes the name data and displays it on screen
  let h1 = document.querySelector(".pokeName");
  h1.innerText = userName;
  //Gets the front sprite and displays it on screen
  let imgTest = document.querySelector(".pokeSprite");
  let imgStore = data.sprites.front_default;
  imgTest.src = imgStore;
}

pokemonAPI();
