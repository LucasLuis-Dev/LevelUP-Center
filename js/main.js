import { displayGames } from "./displayGames.js";
import { gamesServices } from "../services/gamesAPI.js"; 


async function catchGames() {
    const gamesList = await gamesServices.getGames()
    displayGames(gamesList)
    window.gamesList = gamesList
}

catchGames()