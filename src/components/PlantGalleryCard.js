import React, {Component} from 'react';
import './PlantGalleryCard.css';
import {BsInfoCircle} from 'react-icons/bs'

class PlantGalleryCard extends Component{
    constructor(){
        super();
    }

    render(){
        const {plant, index} = this.props
        return (
            <div className='plant-card-container' onClick={() => this.props.handleGalleryCardClick(index)}>
                <div className='plant-card-section'>

                    <img className='plant-image'src={plant.image} alt={plant.name}></img>

                    <div className='card-name'>{plant.name}</div>
                </div>
            </div>
            )
        }
        
}

export default PlantGalleryCard;