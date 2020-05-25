import React, {Component} from 'react';
import './PlantPopUp.css';
import { GrClose } from 'react-icons/gr';

class PlantPopUp extends Component{
    constructor(){
        super();
        this.state = {
            sunInputStr: '',
            waterInputStr: '',
            descriptionInputStr: '',
            editMode: false
        }
    }

    handleEditToggle(){
        this.setState({
            editMode: !this.state.editMode,
            sunInputStr: '',
            waterInputStr: '',
            descriptionInputStr: '',
        })
    }

    handleSun(val){
        this.setState({
            sunInputStr: val
        })
    }

    handleWater(val){
        this.setState({
            waterInputStr: val
        })
    }

    handleDescription(val){
        this.setState({
            descriptionInputStr: val
        })
    }

    handleSave(){
        const {sunInputStr, waterInputStr, descriptionInputStr} = this.state
        this.props.editPlant(this.props.currPlant.id, sunInputStr, waterInputStr, descriptionInputStr)
        this.handleEditToggle()
    }

    handleDelete(){
        this.props.deletePlant(this.props.currPlant.id)
        this.props.handleCloseBtnClick()
    }

    render(){
        
        //passing null into handleBtnClick becaue we want to make sure the currPlant state is nothing when we aren't on a plant
        return(
            <div className='plant-container'>

                <div className='plant-section'>
                    <div className='close-pop-up-btn-section'>
                        <button className='close-pop-up-btn' onClick={() => this.props.handleCloseBtnClick()}>
                            <GrClose />
                        </button>
                    </div>
                   

                    <div className='plant-title'>{this.props.currPlant.name}</div>

                    <div className='plant-pop-up-info-container'>
                        <img className='pop-up-image' src={this.props.currPlant.image}></img>
                        
                        <div className='sub-pop-up-info-2'>
                            <div className='plant-info'>

                                <span className='info-category'>Sun :&nbsp;</span> 
                                {this.state.editMode ? 
                                <input 
                                className='plant-info-input-box sun' type='text' placeholder={this.props.currPlant.sun}
                                onChange={(e) => this.handleSun(e.target.value)}
                                ></input> 
                                : this.props.currPlant.sun}

                            </div>

                            <div className='plant-info'>

                                <span className='info-category'>Water :&nbsp;</span> 
                                {this.state.editMode ? 
                                <input className='plant-info-input-box water' type='text' placeholder={this.props.currPlant.water}
                                onChange={(e) => this.handleWater(e.target.value)}
                                ></input> 
                                : this.props.currPlant.water}

                            </div>

                            <div className='plant-info'>

                                <span className='info-category'>Description :&nbsp;</span> 
                                {this.state.editMode ? 
                                <textarea className='plant-info-input-box description' placeholder={this.props.currPlant.description}
                                onChange={(e) => this.handleDescription(e.target.value)}
                                ></textarea> 
                                : this.props.currPlant.description}

                            </div>
                        </div>
                    </div>

                    <div className='control-btn-section'>
                        {this.state.editMode ? 
                        <div>
                            <button onClick={() => {this.handleEditToggle()}} className='back-out-edit-btn'>Back</button>
                            <button className='save-btn' onClick={() => this.handleSave()}>Save</button>
                        </div>
                        :
                        <div>
                            <button className='edit-btn' onClick={() => {this.handleEditToggle()}}>Edit</button>
                            <button className='delete-btn' onClick={() => this.handleDelete()}>Delete</button>
                        </div>
                        
                        }
                        
                        
                    </div>
                </div>

            </div>
           
        )
    }
}

export default PlantPopUp