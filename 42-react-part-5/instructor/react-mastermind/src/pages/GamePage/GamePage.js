import React from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';

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
