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
            <div className="Game">
                <div className="image-container">
                    <img src='https://cdn3.gamepur.com/images/feature/thumb/god-of-war-ps-cover-art.jpg' alt=''/>
                </div>
                <h2>{this.props.game.name}</h2>
                <div className="Game-information">
                    <div className="developer-info">
                        <p>{this.props.game.publishers}</p>
                        <p>{this.props.game.developers}</p>
                    </div>
                    <div className="Game-reviews">
                        <h3 className="rating">4.5 stars</h3>
                        <p>90 reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}