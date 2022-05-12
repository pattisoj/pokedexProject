//Initial API investigation
console.log("main.js is running...");

//Creates a random number for the Pokedex ID
const randomInteger = Math.floor(Math.random() * 151) + 1;
console.log(randomInteger);

//Pulls Pokémon data
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
  let h2 = document.querySelector(".pokeName");
  h2.innerText = userName;

  //Gets the front sprite and displays it on screen
  let imgTest = document.querySelector(".pokeSprite");
  let imgStore = data.sprites.front_default;
  imgTest.src = imgStore;

  // Append height to height p
  let foundHeight = JSON.stringify(data.height);
  let foundHeightString = foundHeight.replaceAll('"', "");
  let pokemonHeight = Number(foundHeightString);
  let heightChanger = document.querySelector(".pokeHeight");
  heightChanger.append(`Height - ${pokemonHeight / 10}m`);

  // Append weight to weight p
  let foundWeight = JSON.stringify(data.weight);
  let foundWeightString = foundWeight.replaceAll('"', "");
  let pokemonWeight = Number(foundWeightString);
  let weightChanger = document.querySelector(".pokeWeight");
  weightChanger.append(`Weight - ${pokemonWeight / 10}kg`);
}

//Function to get the description data.
async function getDescription() {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${randomInteger}/`
  );
  let data = await response.json();
  console.log(data);

  for (let i = 0; i < data.flavor_text_entries.length; i++) {
    if (data.flavor_text_entries[i].language.name === `en`) {
      let newDescription = `"${data.flavor_text_entries[i].flavor_text}"`;
      console.log(newDescription);
      let descriptionFinder = document.querySelector(".pokeDescription");
      descriptionFinder.append(newDescription);
      break;
    }
  }
}

pokemonAPI();
getDescription();
