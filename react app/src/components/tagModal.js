import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Util from './util';
import { Tag } from './tag';
export class TagModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: '',
            show:true
        }
        this.handleClose = this.handleClose.bind(this)
        this.addNewTag = this.addNewTag.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.deleteTag = this.deleteTag.bind(this)
    }
    handleChange(event) {
        this.setState({newTag: event.target.value});
      }
    componentWillMount() {
        console.log("mounted");
        this.setState({
            tags:Util.getAllTags()
        })
        console.log(this.props);
    }
    addNewTag() {
        if(this.state.newTag) {
            console.log(Util.imageData[this.props.imageId].tags);
            Util.imageData[this.props.imageId].tags.push(this.state.newTag);
            this.props.openEditModalPopUP(false);
        }
    }
    deleteTag(tagName) {
        Util.imageData.forEach(function (imgObj) {
                if((imgObj.tags).indexOf(tagName) !== -1) {
                    imgObj.tags.splice(imgObj.tags.indexOf(tagName), imgObj.tags.indexOf(tagName) + 1);
                }
        });
        this.props.openEditModalPopUP(false);
    }
    handleClose() {
        this.setState({
            show:false
        })
        this.props.openEditModalPopUP(false);
    }
    render() {
        return (
            <Modal show={this.state.show}  onHide={this.handleClose}>
                <Modal.Header onClick={this.handleClose} closeButton>
                    <Modal.Title>All tags present in the system</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="newTag">
                            <Form.Label>Add New Tag</Form.Label>
                            <Form.Control value={this.state.newTag} onChange={this.handleChange} type="text" placeholder="new tag" />
                        </Form.Group>
                        <Button onClick = {this.addNewTag} variant="primary">
                            Add
                        </Button>
                    </Form>
                    <div>
                        <div>{this.state.tags.map((value, index) => {
                            return <Tag deleteTag = {this.deleteTag} isInEditMode = {true} tagValue = {value} key= {index} />
                        }) }
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
      }
}