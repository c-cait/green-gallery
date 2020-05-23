import React, {Component} from 'react';
import './PlantCard.css'

class PlantCard extends Component{
    constructor(){
        super();
    }
    render(){
        var plant = this.props.plants.map(elem => {
            return (
                <div className='plant-card-container'>
                    <div className='plant-card-section'>
                        <img className='plant-image'src={elem.image}></img>
                        <div className='card-name'>{elem.name}</div>
                        {/* <div className='card-info'>SUN: {elem.sun}</div>
                        <div className='card-info'>WATER: {elem.water}</div> */}
                        {/* <div className='card-description card-info'>
                            <span className='description-word'>Description: </span>
                            {elem.description}
                        </div> */}
                        <button className='more-info-btn'>More Info</button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {plant}
            </div>
            
        )
        
    }
        
        
}

export default PlantCard;