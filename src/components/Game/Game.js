// Import libraries
import React from 'react';
import './Game.css';




export class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }


    /*
     id: game.id,
    name: game.name,
    esrbRating: game.esrb_rating,
    gameImage: game.background_image,
    genres: game.genres,
    metaCriticScore: game.metacritic,
    platform: game.platform,
    screenShots: game.short_screenshots
    */
    render() {
        return (
            <section className='game'>
                {console.log(this.props.game)}
                <figure>
                    <img src={this.props.game.gameImage} alt={this.props.game.name + ' game art'} className='img-responsive'/>
                </figure>
                <div className='game-details'>
                    <p>{this.props.game.metaCriticScore}</p>
                    <p>{this.props.game.name}</p>
                </div>
            </section>
        )
    }
}