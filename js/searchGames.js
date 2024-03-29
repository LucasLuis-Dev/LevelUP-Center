import { gamesServices } from "../services/gamesAPI.js";


const inputElement = document.getElementById('navSearch');


inputElement.addEventListener('keypress', event => searchGames(event));

async function searchGames(event) {
    if (event.keyCode === 13) {
        const searchData = inputElement.value;

        const searchResult = await gamesServices.featchGames(searchData)

        console.log(searchResult);
        
        localStorage.setItem('searchResult', JSON.stringify(searchResult));

        localStorage.setItem('searchData', JSON.stringify(searchData));
       
        

        window.location.href = './search.html';

    }

}
