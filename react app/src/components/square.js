import React from 'react';

export class Square extends React.Component {
    
    /* constructor(props) {
        super(props);
        this.state = {value:null}
    } */
    
    render(props) {
        var handleClick = () => {
            if(!this.props.value) {
                this.props.onClickFunction();
            };
        } 
        return (
            <button className="square" onClick = {handleClick}>
                {this.props.value}
            </button>
        )
    }
}