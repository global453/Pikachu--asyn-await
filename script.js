// fetch data from the URL USING ASYNC AND AWAIT FUNCTION 

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Url cant be fetched");
        }
        const data = await response.json();
        console.log(data);
        const PokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("PokemonSprite");
        
        imgElement.src = PokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    

}
}
