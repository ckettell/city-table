import React, { Component } from 'react';
import ReactTable from 'react-table';

const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: []
});

class Table extends Component {
  constructor(){
    super();
      this.state = makeDefaultState();
      // this.resetState = this.resetState.bind(this);

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
    data={this.props.data}
    pivotBy={["City"]}
    filterable
    defaultPageSize={10}
    className="-striped -highlight"
    // Controlled props
    sorted={this.state.sorted}
    page={this.state.page}
    pageSize={this.state.pageSize}
    expanded={this.state.expanded}
    resized={this.state.resized}
    filtered={this.state.filtered}
    // Callbacks
    onSortedChange={sorted => this.setState({ sorted })}
    onPageChange={page => this.setState({ page })}
    onPageSizeChange={(pageSize, page) =>
      this.setState({ page, pageSize })}
    onExpandedChange={expanded => this.setState({ expanded })}
    onResizedChange={resized => this.setState({ resized })}
    onFilteredChange={filtered => this.setState({ filtered })}

    />

    </div>
  )
}
}



export default Table;
