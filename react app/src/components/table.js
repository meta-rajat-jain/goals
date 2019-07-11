import React from 'react';
import Table from 'react-bootstrap/Table'
import Util from './util';
import { TableRow } from './tableRow'
import './table.css'
import './common.css'
import { TagModal } from './tagModal';
import { Filter } from './filter';
export class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData:[],
            showTagModalWindow: false,
            filterList:[],
            imageId:''
        }
        this.openEditModalPopUP = this.openEditModalPopUP.bind(this)
        this.getFilteredList = this.getFilteredList.bind(this)
    }
    getRowData = () => {
        let data = Util.getImageData()
        this.setState({rowData : data,filterList:data});
    }
    componentWillMount() {
        this.getRowData()
    }
    openEditModalPopUP(value, imageId) {
        console.log(imageId);
        this.setState({
            showTagModalWindow:value,
            imageId:imageId
        }, console.log(this.state.imageId))
    }
    getFilteredList(filteredList) {
        this.setState({filterList : filteredList});
    }
    render() {
        if(!this.state.showTagModalWindow) {
           return  (
               <div className = {this.props.className}>
                <Filter getFilteredList = {this.getFilteredList} listToFilter = {this.state.rowData}/>
                <Table striped bordered condensed="true" hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Image Name</th>
                                <th>Tags associated</th>
                                <th>Edit Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filterList.map((image, index) => 
                            <TableRow openEditModalPopUP = {(value, imageId) => this.openEditModalPopUP(value, imageId)} key= {index} imageData = {image} />)}
                        </tbody>
                </Table>
            </div>)
            
        } else {
            return <TagModal imageId =  {this.state.imageId} openEditModalPopUP= {(value, imageId) => this.openEditModalPopUP(value, imageId)}   />
        }
    }
}