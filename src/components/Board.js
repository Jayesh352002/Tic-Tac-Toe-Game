import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
            </div>
        )
    }
}   
/*
import React, { useState } from "react"
import Square from "./Square";

const Board = () => {

    const initialSquares = Array(9).fill(null);

    const [squares,setSquares] = useState(initialSquares);

    const [xIsNext , setXIsNext] = useState(true)

    
    const handleClickEvent = (i) => {
        const newSquares = [...squares];

        //const winner = calculateWinner(newSquares);

        const winnerDeclared = Boolean(calculateWinner(newSquares));
        const squareFilled = Boolean(newSquares[i]);

        console.log(winnerDeclared);

        if(winnerDeclared || squareFilled){
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O'; 

        setSquares(newSquares);

        setXIsNext(!xIsNext);
    };

    const renderSquare = (i) => {
        return(
            <Square 
                value = {squares[i]} 
                onClickEvent = {() => handleClickEvent(i)}/>
        );
    };

    const winner = calculateWinner(squares.slice());

    console.log(winner,squares[2]);

    const status = winner ? `Winner is ${winner}` : `Next Player : ${xIsNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
        </div>
    )
}

export default Board ; 

function calculateWinner (squares) {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ];

    for(let line in lines){
        const [a,b,c] = line ; 

        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
        else{
            return squares[b];
        }
    }

    
}    

*/
