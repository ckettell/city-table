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

  componentDidMount(){
    this.parseDataToInteger()
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

  parseDataToInteger = () => {

  const citiesData = this.props.data

  const parsedData = []

  citiesData.map(city => {
    const relevantStringsToIntegers = {}
      Object.keys(city).map(function(key){
        relevantStringsToIntegers[key] = parseInt(city[key].replace(/\,/g,''), 10) || city[key]
        console.log(relevantStringsToIntegers[key]);
      })
    parsedData.push(relevantStringsToIntegers)
  })
    return parsedData
  }


  render(){

  const chosenColumn = this.props.params['columnName']

  return (
    <div>
    <ReactTable
    columns={this.setColumns()}
    data={this.parseDataToInteger()}
    filterable
    defaultSorted={[
      {
        id: chosenColumn,
        desc: true
        }
      ]}
    />
    <br/>
    </div>
    )
  }
}

export default Table;
