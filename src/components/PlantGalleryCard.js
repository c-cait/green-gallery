import React, {Component} from 'react';
import './PlantGalleryCard.css'

class PlantGalleryCard extends Component{
    constructor(){
        super();
    }

    render(){
        const {plant} = this.props
        return (
            <div key={plant.id} className='plant-card-container'>
                <div className='plant-card-section'>

                    <img className='plant-image'src={plant.image} alt={plant.name}></img>

                    <div className='card-name'>{plant.name}</div>

                    <button 
                        onClick={() => this.props.handleBtnClick(plant)}
                        className='more-info-btn'>
                        More Info
                    </button>

                </div>
            </div>
            )
        }
        
}

export default PlantGalleryCard;