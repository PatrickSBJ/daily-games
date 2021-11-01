import React from 'react';
import './GameList.css';
import { Game } from '../Game/Game';

export class GameList extends React.Component {
    render () {
        return (
                <div className='GameList'>
                    {this.props.games.map(game => {
                        return <Game game={game} />
                    })}
                </div>
        )
    }
};