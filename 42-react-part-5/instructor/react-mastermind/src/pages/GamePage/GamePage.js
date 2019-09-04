import React from 'react';

import { Link } from 'react-router-dom';

import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';

import './GamePage.css'

const GamePage = ({
  winTries,
  colors,
  guesses,
  handlePegClick,
  handleScoreClick,
  selColorIdx,
  handleColorSelection,
  handleNewGameClick
}) => {

  return (
    <>
      <div className="flex-h align-flex-end">
        <GameBoard
          colors={colors}
          guesses={guesses}
          handlePegClick={handlePegClick}
          handleScoreClick={handleScoreClick}
        />
        <div className='App-controls'>
          <ColorPicker
            colors={colors}
            selColorIdx={selColorIdx}
            handleColorSelection={handleColorSelection}
          />
          <GameTimer />
          <Link className="btn btn-default GamePage-link-margin" to="/settings">Difficulty</Link>
          <NewGameButton handleNewGameClick={handleNewGameClick}/>
        </div>
      </div>
      <footer className='App-header-footer'>
        {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
      </footer>
    </>
  )
}

export default GamePage;
