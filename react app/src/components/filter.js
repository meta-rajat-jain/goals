import React from 'react';
import Form from 'react-bootstrap/Form'
export class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listToFilter:this.props.listToFilter,
        }
        this.filterList = this.filterList.bind(this)
        this.searchInTags = this.searchInTags.bind(this)
    }

    filterList(searchedString) {
        let thisReference=this;
        let listToFilter = this.state.listToFilter;
        listToFilter = this.state.listToFilter.filter((obj) => {
            return obj.name.toLowerCase().search(
            searchedString.target.value.toLowerCase()) !== -1 || thisReference.searchInTags(obj.tags, searchedString.target.value.toLowerCase())
            
        });
        this.props.getFilteredList(listToFilter)
    }

    searchInTags = (tagArray, searchedString) => {
        let tagFound = false;
        tagArray.forEach(tag => {
            if(tag.indexOf(searchedString) !== -1) {
                tagFound = true;
            }
        })
        return tagFound;
    }

    render() {
        return(
            <Form>
                <Form.Group controlId="newTag">
                    <Form.Label>Search</Form.Label>
                    <Form.Control  autoComplete="off" onChange={this.filterList} type="text" placeholder="name" />
                </Form.Group>
            </Form>
        )
    }
}