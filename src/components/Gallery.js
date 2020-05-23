import React, {Component} from 'react';
import Plant from './Plant'
import PlantCard from './PlantCard';

class Gallery extends Component{
    constructor(){
        super();
        this.state = {
            plantOpen: false
        }
    }



    render(){
        return(
            <div>
               <div>Gallery.js</div> 

                < PlantCard plants={this.props.plants} />

                < Plant 
                editPlant={this.props.editPlant}
                deletePlant={this.props.deletePlant}
                />
            </div>
        )
    }
}

export default Gallery;