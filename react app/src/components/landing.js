import React from 'react';
import { Board } from './board';
import { TableComponent } from './table';
import Button from 'react-bootstrap/Button'
import './landing.css'
export class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateToRender: ''
        }
    }
    openState = (stateToRender) => {
       this.setState({stateToRender : stateToRender});
      };
      render() {
        return (
            <div>
                <Button className ="header-btns" variant="primary"  onClick = {() => this.openState("Tic Tac")}>Play Tic Toc</Button>
                <Button variant="primary" className="header-btns" onClick = {() => this.openState("Image Viewer")}>Image Viewer</Button>
                <Board className = {this.state.stateToRender  === "Tic Tac" ? "show" : "hide"}/>
                <TableComponent className = {this.state.stateToRender === 'Image Viewer' ? 'show' : 'hide'} />
            </div>
        )
    }
}