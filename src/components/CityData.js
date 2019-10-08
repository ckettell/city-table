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
    .then(() => console.log(this.state.cityData))
    .then(() => this.setState({ renderTable: true}))
  }

  render(){

    let table

    if(this.state.renderTable){
      console.log(this.state.renderTable);
      console.log('hi');
      table = <Table  data={this.state.cityData}/>
      console.log(this.state.cityData);
    }

    return (
      <div>
      {table}
      </div>
    )
  }

}

export default CityData
