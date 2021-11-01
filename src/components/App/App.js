import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import { Game } from '../Game/Game';
import { GameList } from '../GameList/GameList';
import { Search } from '../Search/Search';

// Hard coded example game for testing
const game = {
  name: 'God of War',
  releaseDate: '1999-10-05',
  gameImg: 'background_image',
  esrbRating: 'M',
  developers: 'Valve',
  publishers: 'Sony',
  genres: 'Action',
  tags: 'Singleplayer',
  creators: 'Jane Doe'
};

const games = [
  game,
  game,
  game,
  game,
  game,
  game
];

class App extends React.Component {
  constructor (props) {
    super(props);
  };

  searchRAWG(date) {
    console.log(`Searching RAWG with ${date}`);
  };
  
  render () {
    return (
      <div className='App'>
        <h1>Games of the Day</h1>
        <Search searchRAWG={this.searchRAWG} />
        <GameList games={games} />
      </div>
    );
  }
  
}

export default App;
