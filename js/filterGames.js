
import { displayGames } from './displayGames.js';

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', filterGames));

function filterGames() {
    
    const categoriesTitle = document.getElementById('categoriesTitle');
    const buttonElement = document.getElementById(this.id);

    
    const category = buttonElement.value;

    
    let filteredGames;
    if (category === "Gratuitos") {
        filteredGames = gamesList.filter(game => game.price === "Gratuito");
    } else if (category === "Pagos") {
        filteredGames = gamesList.filter(game => game.price.includes('R$'));
    } else if (category === "Todas as Categorias") {
        filteredGames = gamesList;
    } else {
        filteredGames = gamesList.filter(game => game.category === category);
    }

    
    categoriesTitle.textContent = category;
    displayGames(filteredGames);
}
