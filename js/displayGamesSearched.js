import { displayGames } from "./displayGames.js";


const encodedSearchResult = localStorage.getItem('searchResult');
const encodedSearchData = localStorage.getItem('searchData');

const searchResult = JSON.parse(encodedSearchResult);
const searchData = JSON.parse(encodedSearchData);

console.log(searchResult);

if (searchResult !== undefined) {
   
    displayGames(searchResult);
    const searchTitle = document.getElementById('searchTitle');
    searchTitle.textContent = `Resultados de pesquisa para "${searchData}"`


} else {
    const mainContainer = document.getElementById('mainContainer');
    
    mainContainer.innerHTML += `
    <div class="not-found__container">
        <img  src="../assets/resultado-da-pesquisa-nao-encontrado-ilustracao_585024-17.jpg">
    </div>`

    console.log(gamesContainer)
    console.log('Nenhum resultado de pesquisa encontrado.');
}
