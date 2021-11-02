// Import libraries
import React from 'react';
import './Game.css';




export class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='game'>
                {console.log(this.props.game)}
                <div className='image-container'>
                    <img src={this.props.game.gameImage} alt={this.props.game.name + ' game art'}/>
                </div>
                <div className='game-description'>
                    <p>{this.props.game.name}</p>
                </div>
            </div>
        )
    }
}