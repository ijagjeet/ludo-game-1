import React from 'react';
import './Piece.css';
import gameService from '../../utils/gameService';

const Piece = ({game, piece, color}) => {
  let playerTurn = (game.playerIndex === piece.player);
  let clickMove = playerTurn && game.waitingToMove && piece.player === game.playerIndex ? 
    <div className="Piece-color" 
      style={{backgroundColor: game.waitingToMove ? (piece.player === game.playerIndex ? 'grey' : color) : color}}
      onClick={(e) => {e.preventDefault(); gameService.movePiece(piece)}}/> 
    :
    <div className="Piece-color-noHover" 
      style={{backgroundColor: game.waitingToMove ? (piece.player === game.playerIndex ? 'grey' : color) : color}} /> ; 
  return (
    <div className="Piece">
      {clickMove}
    </div>
  );
}
export default Piece;