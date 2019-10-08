import React, { Component } from 'react';
import ReactTable from 'react-table';

class Table extends Component {
  constructor(){
    super();
    this.state = {
      columns: '',
      data: ''
    }
  }

  componentDidMount = () => {
    this.setState({ columns: this.props.data.columns})
    this.setState({ data: this.props.data})
    console.log(this.props.data);
    console.log(this.state.data);
    console.log(this.state.columns);
    // this.setColumns()
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
  console.log(columns);
  return columns
  }

  render(){


  return (
    <div>
    <ReactTable
    columns={this.setColumns()}

    />

    </div>
  )
}
}

export default Table;
