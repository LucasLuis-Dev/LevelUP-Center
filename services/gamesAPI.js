async function getGames() {
    const response = await fetch("http://localhost:3000/games")
    let gamesList = await response.json()

    return gamesList
}


async function createGame(name, description , price, image, category) {
    const connection = await fetch("http://localhost:3000/games", {
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
    const connection = await fetch(`http://localhost:3000/games?q=${name}`)
    const response = await connection.json()

    return response
}

export const gamesServices = {
    getGames,
    createGame,
    featchGames
}