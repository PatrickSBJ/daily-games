import './App.css';
import React from 'react';
import { Game } from '../Game/Game';
import { GameList } from '../GameList/GameList';
import { Search }  from '../Search/Search';
import { Footer } from '../Footer/Footer';
import RAWG from '../../util/RAWG';
import 'bootstrap/dist/css/bootstrap.min.css';




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
      <div className='container-fluid'>
        <header className='row'>
          <h1 className='col-6'>Games of the Day</h1>
          <p className='col-6'>Search any date for game releases!</p>
        </header>
        <div className='row'> 
          <div className='col-12'>
            <Search searchRAWG={this.searchRAWG} />
          </div> 
        </div>
        <GameList games={this.state.games} />
        <Footer />
      </div>
    );
  }
  
}

export default App;
