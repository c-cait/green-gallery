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
                    <div className='plant-title'>{this.props.currPlant.name}</div>
                    <img className='pop-up-image' src={this.props.currPlant.image}></img>
                    <div className='plant-info'>
                        <span className='info-category'>Sun :&nbsp;</span> 
                        {this.props.currPlant.sun}
                    </div>
                    <div className='plant-info'>
                        <span className='info-category'>Water :&nbsp;</span> 
                        {this.props.currPlant.water}
                    </div>
                    <div className='plant-info'>
                        <span className='info-category'>Description :&nbsp;</span> 
                         {this.props.currPlant.description}
                    </div>

                    <button
                    onClick={() => this.props.handleBtnClick(null)}
                    >Close Me</button>
                    
                </div>

            </div>
           
        )
    }
}

export default PlantPopUp