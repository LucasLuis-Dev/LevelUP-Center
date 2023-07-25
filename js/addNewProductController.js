import { gamesServices } from "../services/gamesAPI.js";

const form = document.querySelector('form');

async function createGame(event) {
    event.preventDefault();

    const gameName = document.querySelector('[data-game-name]').value;
    const gameDescription = document.querySelector('[data-game-description]').value;
    const gamePrice = document.querySelector('[data-game-price]').value;
    const gameImage = document.querySelector('[data-game-image]').value;
    const gameCategory = document.querySelector('[data-game-category]').value;

    await gamesServices.createGame(gameName, gameDescription, gamePrice, gameImage, gameCategory);

    window.location.href = "../index.html";
}   


form.addEventListener('submit', event => createGame(event))