import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";


const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 40,
  expanded: {},
  resized: [],
  filtered: []
});

class Table extends Component {
  constructor(){
    super();
      this.state = makeDefaultState();

  }

  setColumns = () => {
    const columns = []
    const amendColumns = this.props.data.columns;

    amendColumns.map(column =>
      columns.push({
        Header: column,
        accessor: column
      })
  )
  return columns
  }


  render(){

  const chosenColumn = this.props.params['columnName']

  return (
    <div>
    <ReactTable
    columns={this.setColumns()}
    data={this.props.data}
    filterable
    defaultSorted={[
      {
        id: chosenColumn,
        desc: false
        }
      ]}
    />
    <br/>
    </div>
  )
}
}

export default Table;
