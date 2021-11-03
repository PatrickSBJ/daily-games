

const RAWG = {
    search (date) {
        return fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${date},${date}`).then(response => {
            return response.json();
        }).then(jsonResponse => {
            
            if(jsonResponse.results){
                console.log(jsonResponse);
                return jsonResponse.results.map(game => {
                    console.log(game);
                    return {
                        id: game.id,
                        name: game.name,
                        esrbRating: game.esrbRating,
                        gameImage: game.background_image,
                        genres: game.genres,
                        metaCriticScore: game.metacritic,
                        platform: game.platform,
                        screenShots: game.short_screenshots
                    }
                    
                })
            }
        });
        
    }
}

export default RAWG;