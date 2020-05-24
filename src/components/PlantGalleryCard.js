import React, {Component} from 'react';
import './PlantGalleryCard.css'

class PlantGalleryCard extends Component{
    constructor(){
        super();
    }

    render(){
        const {plant, index} = this.props
        return (
            <div className='plant-card-container'>
                <div className='plant-card-section'>

                    <img className='plant-image'src={plant.image} alt={plant.name}></img>

                    <div className='card-name'>{plant.name}</div>

                    <button 
                        onClick={() => this.props.handleGalleryCardClick(index)}
                        className='more-info-btn'>
                        More Info
                    </button>

                </div>
            </div>
            )
        }
        
}

export default PlantGalleryCard;