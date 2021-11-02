const apiKey = '';

const RAWG = {
    search (date) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key=${apiKey}&dates=${date},${date}`).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.results){
                console.log(jsonResponse);
                return jsonResponse.results.map(game => {
                    console.log(game);
                    return {
                        id: game.id,
                        name: game.name,
                        esrbRating: game.esrb_rating,
                        gameImage: game.background_image
                    }
                    
                })
            }
        });
        
    }
}

export default RAWG;