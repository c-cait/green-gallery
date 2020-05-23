import React, {Component} from 'react';
import './PlantPopUp.css'

class PlantPopUp extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            image: '',
            sun: '',
            water: '',
            description: '',
            editMode: false
        }
    }

    handleName(e){}

    handleImage(e){}

    handleSun(e){}

    handleWater(e){}

    handleDescription(e){}

    render(){
        
        //passing null into handleBtnClick becaue we want to make sure the currPlant state is nothing when we aren't on a plant
        return(
            <div className='plant-container' onClick={() => this.props.handleBtnClick(null)}>

                <div className='plant-section'>

                    <button
                    onClick={() => this.props.handleBtnClick(null)}
                    >Close Me</button>
                    {this.props.currPlant.name}
                    
                </div>

            </div>
           
        )
    }
}

export default PlantPopUp