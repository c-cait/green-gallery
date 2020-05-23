import React, {Component} from 'react';
import './App.css';
import plantData from './plantData.json';
import axios from 'axios';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import NewPlant from './components/NewPlant';

class App extends Component {
  constructor(){
    super();
    this.state = {
      plants: plantData
    }

    this.viewPlant = this.viewPlant.bind(this)
    this.createPlant = this.createPlant.bind(this)
    this.editPlant = this.editPlant.bind(this)
    this.deletePlant = this.deletePlant.bind(this)
  }

  //when component mounts (app) we want to set our plants state to the plants array
  componentDidMount(){
    axios.get('http://localhost:3000/plants')
    .then(res => {
      this.setState({plants: res.data})
    })
    .catch(err => console.log(err))
  }

  viewPlant(id){
    // axios.get(`http://localhost:3000/plants/${id}`)
    // .then(res => {
    //   this.
    // })
  }

  createPlant(id, name, image, sun, water, description){

  }

  editPlant(id, name, image, sun, water, description){

  }

  deletePlant(id){

  }

  render() {
    return (
      <div>
        < Header />

        < Gallery 
        plants={this.state.plants}
        viewPlant={this.viewPlant}
        editPlant={this.editPlant}
        deletePlant={this.deletePlant}
        />

        < NewPlant 
        createPlant={this.createPlant}
        />
        
        < Footer />
      </div>
    );
  }
}

export default App;
