import React, {Component} from 'react';
import PlantPopUp from './PlantPopUp'
import PlantGalleryCard from './PlantGalleryCard';
import './Gallery.css'

class Gallery extends Component{
    constructor(){
        super();
        this.state = {
            plantOpen: false,
            index: null
        }
        //currPlant will soon hold the obj we are on

        this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this)
        this.handleGalleryCardClick = this.handleGalleryCardClick.bind(this)
    }

    handleCloseBtnClick(){
        this.setState({
            plantOpen: false,
            index: null
        })
    }

    handleGalleryCardClick(index){
        this.setState({
            plantOpen: true,
            index: index
        })
    }

    

    render(){
        return(
            <div className='gallery-container'>
                {/* <div className='gallery-card-flex-container'> */}
                {this.props.plants.map((elem, index) => {
                    return < PlantGalleryCard key={elem.id} plant={elem} index={index} handleGalleryCardClick={this.handleGalleryCardClick}/>
                })}
                {/* </div> */}

                {this.state.plantOpen === true ?  
                < PlantPopUp 
                editPlant={this.props.editPlant}
                deletePlant={this.props.deletePlant}
                handleCloseBtnClick={this.handleCloseBtnClick}
                currPlant={this.props.plants[this.state.index]}
                />
                : 
                ''
                }
               
            </div>
        )
    }
}

export default Gallery;