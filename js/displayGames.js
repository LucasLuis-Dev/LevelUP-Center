const gamesContainer = document.getElementById('gamesContainer')

export function displayGames(gamesList) {
    gamesContainer.innerHTML = ""

    gamesList.forEach(game => {

        gamesContainer.innerHTML += `
        <div class="game__container">

                <figure class="game-photo__container">
                    <img src="${game.image}" alt="">
                </figure>

                <div class="game-title__container">
                    <h2>${game.name}</h2>
                </div>

                

                <div class="game-price__container">
                    <p>${game.price}</p>
                </div>
        </div>
        `
        
    });

}



