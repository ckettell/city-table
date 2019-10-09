import React, { Component } from 'react';
import Table from './Table'
import data from '../data.csv'
import { csv } from 'd3';

class CityData extends Component {
  constructor(){
    super();
    this.state = {
      cityData: '',
      renderTable: false
    }
  }

  componentDidMount = () => {
    csv(data)
    .then(cities => this.setState({ cityData: cities}))
    .then(() => this.setState({ renderTable: true}))
  }

  render(){

    const chosenColumn  = this.props.match.params

    let table

    if(this.state.renderTable){
      table = <Table  data={this.state.cityData} params={chosenColumn}/>
    }

    return (
      <div>
      {table}
      </div>
    )
  }

}

export default CityData
