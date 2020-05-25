import React, {Component} from 'react';
import './NewPlant.css';
import { GrClose } from 'react-icons/gr';

class NewPlant extends Component{
    constructor(){
        super();
        this.state = {
            newName: '',
            newImage: '',
            newSun: '',
            newWater: '',
            newDescription: ''
        }
    }

    handleName(val){
        this.setState({
            newName: val
        })
    }

    handleImage(val){
        this.setState({
            newImage: val
        })
    }

    handleSun(val){
        this.setState({
            newSun: val
        })
    }

    handleWater(val){
        this.setState({
            newWater: val
        })
    }

    handleDescription(val){
        this.setState({
            newDescription: val
        })
    }

    render(){
        return(
            <div className='new-plant-container'>
                <div className='new-plant-section'>
                    <div className='close-new-plant-pop-up-btn-section'>
                        <button className='close-new-plant-pop-up-btn' onClick={() => this.props.handleNewPlantPopUp()}>
                            <GrClose />
                        </button>
                    </div>

                    <div className='new-plant-title'>New Plant Information</div>

                    <div className='new-plant-info'>

                        <input 
                            className='new-plant-info-input-box' 
                            placeholder='Plant Name'
                            onChange={(e) => this.handleName(e.target.value)}
                        
                        ></input>

                        <input 
                            className='new-plant-info-input-box' 
                            placeholder='Plant Image URL'
                            onChange={(e) => this.handleImage(e.target.value)}
                        ></input>

                        <input 
                            className='new-plant-info-input-box' 
                            placeholder='Amount of Sun'
                            onChange={(e) => this.handleSun(e.target.value)}
                        ></input>

                        <input 
                            className='new-plant-info-input-box' 
                            placeholder='Amount of Water'
                            onChange={(e) => this.handleWater(e.target.value)}
                        ></input>

                        <textarea 
                            className='new-plant-info-input-box new-description' 
                            placeholder='Description of Plant'
                            onChange={(e) => this.handleDescription(e.target.value)}
                        ></textarea>

                    </div>

                    <div>
                        <button 
                        onClick={() => {this.props.createPlant(this.state.newName, this.state.newImage, this.state.newSun, this.state.newWater, this.state.newDescription); this.props.handleNewPlantPopUp()}}>
                            Create New Plant
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewPlant;