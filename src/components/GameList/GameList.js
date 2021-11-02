import React from 'react';
import './GameList.css';
import { Game } from '../Game/Game';

export class GameList extends React.Component {
    render () {
        return (
                <div className='GameList container'>
                    { console.log(this.props.games)}
                    {this.props.games.map(game => {
                        return <Game game={game} key={game.id} />
                    })}
                </div>
        )
    }
};