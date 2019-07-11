import React from 'react';
import { Tag } from './tag';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
export class TableRow extends React.Component {
      static propTypes = {
        imageData: PropTypes.shape({
            tags:PropTypes.array
        })
      }
      constructor(props) {
          super(props);
          this.state = {
              showTagModalWindow : false
          }
      }
    openEditModalPopUP = (value, imageId) => {
         this.props.openEditModalPopUP(value, imageId);
    }
    render() {
        
            return (
                <tr>
                  <td>{this.props.imageData.Id}</td>
                  <td ><Image thumbnail  src={require('../Images/' + this.props.imageData.name + '.jpg')} alt={this.props.imageData.name} /></td>
                  <td>{this.props.imageData.name}</td>
                  <td>{this.props.imageData.tags.map((value,index) => {
                     return  <Tag openEditModalPopUP = {(value, imageId) => this.openEditModalPopUP(value, imageId)} imageId = {this.props.imageData.Id} isInEditMode = {false}  tagValue = {value} key= {index} /> 
                  })}</td>
                  <td><Button variant="primary"  onClick={() => this.openEditModalPopUP(true, this.props.imageData.Id)}> Edit Tags</Button></td>
                </tr>
              );
        
      }
}
