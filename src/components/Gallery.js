import React, {Component} from 'react';
import PlantPopUp from './PlantPopUp'
import PlantGalleryCard from './PlantGalleryCard';
import './Gallery.css'

class Gallery extends Component{
    constructor(){
        super();
        this.state = {
            plantOpen: false,
            currPlant: null
        }
        //currPlant will soon hold the obj we are on

        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick(plant){
        this.setState({
            plantOpen: !this.state.plantOpen,
            currPlant: plant
        })
    }

    

    render(){
        return(
            <div className='gallery-container'>
               <div className='gallery-title'>Gallery</div> 

                {this.props.plants.map(elem => {
                    return < PlantGalleryCard plant={elem} handleBtnClick={this.handleBtnClick}/>
                })}
                

                {this.state.plantOpen === true ?  
                < PlantPopUp 
                editPlant={this.props.editPlant}
                deletePlant={this.props.deletePlant}
                handleBtnClick={this.handleBtnClick}
                currPlant={this.state.currPlant}
                />
                : 
                ''
                }
               
            </div>
        )
    }
}

export default Gallery;