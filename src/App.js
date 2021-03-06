import React, {Component} from 'react';
import './App.css';
import plantData from './plantData.json';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import NewPlantBtn from './components/NewPlantBtn';
import Landing from './Landing';

class App extends Component {
  constructor(){
    super();
    this.state = {
      plants: plantData,
      appOpen: false
    }

    this.createPlant = this.createPlant.bind(this)
    this.editPlant = this.editPlant.bind(this)
    this.deletePlant = this.deletePlant.bind(this)
    this.handleApp = this.handleApp.bind(this)
  }

  handleApp(){
    this.setState({
      appOpen: !this.state.appOpen
    })
  }

  //when component mounts (app) we want to set our plants state to the plants array
  componentDidMount(){
    axios.get('http://localhost:3001/plants')
    .then(res => {
      this.setState({plants: res.data})
    })
    .catch(err => console.log(err))
  }

  createPlant(name, image, sun, water, description){
    const body = {name, image, sun, water, description}
    axios.post('http://localhost:3001/plants', body)
    .then(res => {
      this.setState({plants: res.data})
    })
    .catch(err => console.log(err))
  }

  editPlant(id, sun, water, description){
      const body = {sun, water, description}
      axios.put(`http://localhost:3001/plants/${id}`, body)
      .then((res) => {
        this.setState({
          plants: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deletePlant(id){
    axios.delete(`http://localhost:3001/plants/${id}`)
    .then((res) => {
      this.setState({
        plants: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='app'>
        {this.state.appOpen ? 
        <div>
        < Header handleAppClose={this.handleApp}/>
        
        < NewPlantBtn 
        createPlant={this.createPlant}
        />

        < Gallery 
        plants={this.state.plants}
        editPlant={this.editPlant}
        deletePlant={this.deletePlant}
        />

        

        < Footer />
        </div>
        :
        <div>
        < Landing handleAppOpen={this.handleApp}/>
        </div>
        }

      </div>
    );
  }
}

export default App;
