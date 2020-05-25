import React, {Component} from 'react';
import NewPlant from './NewPlant';
import './NewPlantBtn.css'

class NewPlantBtn extends Component {
    constructor() {
        super();
        this.state = {
            newPlantOpen: false
        }

        this.handleNewPlantPopUp= this.handleNewPlantPopUp.bind(this)
    }

    handleNewPlantPopUp(){
        this.setState({
            newPlantOpen: !this.state.newPlantOpen
        })
    }

    render() {
        return (
        <div className='new-plant-btn-container'> 
            <button onClick={() => this.handleNewPlantPopUp()} className='create-plant-btn'>Create New Plant</button>
            
            {this.state.newPlantOpen ? 
            < NewPlant createPlant={this.props.createPlant} handleNewPlantPopUp={this.handleNewPlantPopUp} /> 
            : ''}

        </div>
        
        )
    }
    
}

export default NewPlantBtn;