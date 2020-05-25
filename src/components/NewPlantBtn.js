import React, {Component} from 'react';
import NewPlant from './NewPlant';

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
        <div> 
            <button onClick={() => this.handleNewPlantPopUp()}>Create a New Plant</button>
            
            {this.state.newPlantOpen ? 
            < NewPlant createPlant={this.props.createPlant} handleNewPlantPopUp={this.handleNewPlantPopUp} /> 
            : ''}

        </div>
        
        )
    }
    
}

export default NewPlantBtn;