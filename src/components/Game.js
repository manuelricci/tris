import { useState } from 'react';
import Board from './Board';

const Game = () => {
	const [board, setBoard] = useState( Array( 9 ).fill( null ) );
	const [xIsNext, setXIsNext] = useState( true );

	console.table( board );

	const handleClick = i => {
		const boardCopy = [...board];
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	return (
		<Board squares={ board } onClick={ handleClick } />
	);

};

export default Game;
