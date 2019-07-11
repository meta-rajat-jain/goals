import React from 'react';
import Badge from 'react-bootstrap/Badge'
import './tag.css'
import Button from 'react-bootstrap/Button'
export class Tag extends React.Component {

    openEditModalPopUP = (value, imageId) => {
        this.props.openEditModalPopUP(value, imageId);
   }
   deleteTag = (tagName) => {
        this.props.deleteTag(tagName)
   }
    render() {
        return (
            <div className ="display-tags-inline">
                <div className= {this.props.isInEditMode ? 'show' : 'hide'}>
                    <Button className = {'align-in-modal '} variant="primary">
                        {this.props.tagValue} <Badge onClick={() => this.deleteTag(this.props.tagValue)} className = { this.props.isInEditMode ? 'align-tags show' : 'hide'} variant="">X</Badge>
                    </Button>
                </div>
                <div className= {!this.props.isInEditMode ? 'display-in-table show' : 'hide'}>
                    <span onClick={() => this.openEditModalPopUP(true, this.props.imageId)}> {this.props.tagValue}</span>
                </div>
            </div>
        );
      }
}