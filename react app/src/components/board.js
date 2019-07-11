import React from 'react';
import { Square } from './square';
import Util from './util.js';
import './common.css'
import Button from 'react-bootstrap/Button'

export class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    getInitialState = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            status : '',
            isWinnerDeclared : false
          });
    }
    componentWillMount() {
        this.getInitialState()
    }

    playTurn(index) {
        if(this.state.isWinnerDeclared) {
            return;
        }
        let squares = [...this.state.squares];
        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.updateBoard(squares)
    }
    updateBoard(squares) {
        let winner = Util.calculateWinner(squares);
        this.setState({squares: squares, xIsNext: !this.state.xIsNext,status : this.getStatus(winner), isWinnerDeclared: (winner ? true : false)});
    }
    getStatus(winner) {
        return winner ? 'Winner is ' + winner : 'Next player: ' + (!this.state.xIsNext ? 'X' : 'O');
    }
    render() {
        if(this.state.squares.length) {
            console.log(this.state.squares);
            return (
                <div className = {this.props.className}>
                    <div className="status">{this.state.status}</div>
                    <div className="board-row">
                        <Square onClickFunction = {() => this.playTurn(0)} value={this.state.squares[0]}/>
                        <Square onClickFunction = {() => this.playTurn(1)} value={this.state.squares[1]}/>
                        <Square onClickFunction = {() => this.playTurn(2)} value={this.state.squares[2]}/>
                    </div>
                    <div className="board-row">
                        <Square onClickFunction = {() => this.playTurn(3)} value={this.state.squares[3]}/>
                        <Square onClickFunction = {() => this.playTurn(4)} value={this.state.squares[4]}/>
                        <Square onClickFunction = {() => this.playTurn(5)} value={this.state.squares[5]}/>
                    </div>
                    <div className="board-row">
                        <Square onClickFunction = {() => this.playTurn(6)} value={this.state.squares[6]}/>
                        <Square onClickFunction = {() => this.playTurn(7)} value={this.state.squares[7]}/>
                        <Square onClickFunction = {() => this.playTurn(8)} value={this.state.squares[8]}/>
                    </div>
                    <Button className="reset-game" variant="primary" onClick={this.getInitialState}>Start a new game</Button>
                </div>
            );
        } else {
            console.log(this.state.squares);
            return null;
        }
    }
}
