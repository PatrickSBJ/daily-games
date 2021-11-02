import './App.css';
import React from 'react';
import { Game } from '../Game/Game';
import { GameList } from '../GameList/GameList';
import { Search }  from '../Search/Search';
import RAWG from '../../util/RAWG';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: []
    };

    this.searchRAWG = this.searchRAWG.bind(this);
  };

  searchRAWG(date) {
    RAWG.search(date).then(games => {
      this.setState({
        games: games
      })
      console.log(this.state);

    });
  };
  
  render () {
    return (
      <div className='App'>
        <div className='jumbotron text-center'>
          <h1>Games of the Day</h1>
        </div>
        <Search searchRAWG={this.searchRAWG} />
        <GameList games={this.state.games} />
      </div>
    );
  }
  
}

export default App;
