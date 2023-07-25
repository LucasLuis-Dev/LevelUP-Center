async function getGames() {
    const response = await fetch("https://lucasluis-dev.github.io/LevelUP-Center/data/db.json")
    let gamesList = await response.json()
    gamesList = gamesList.games

    return gamesList
}


async function createGame(name, description , price, image, category) {
    const connection = await fetch("https://lucasluis-dev.github.io/LevelUP-Center/data/db.json", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            description,
            price,
            image,
            category

        })
    });
    const gameCreated = await connection.json()
    console.log(gameCreated)
    return gameCreated
    
}


async function featchGames(name) {
    const response = await fetch("https://lucasluis-dev.github.io/LevelUP-Center/data/db.json");
    let data = await response.json();
    data = data.games

    const searchTermLower = name.toLowerCase();

    // Filter games that match the search term (case-insensitive) in either name or description
   
    const searchResults = data.filter((game) => {
        const gameNameLower = String(game.name).toLowerCase();
        const gameDescriptionLower = String(game.description).toLowerCase();
    
        return (
          gameNameLower.includes(searchTermLower) ||
          gameDescriptionLower.includes(searchTermLower)
        );
      });

    return searchResults;

}

export const gamesServices = {
    getGames,
    createGame,
    featchGames
}

// https://lucasluis-dev.github.io/LevelUP-Center/data/db.json