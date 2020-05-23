import React, {Component} from 'react';
import Plant from './Plant'

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
                Gallery.js

                < Plant 
                editPlant={this.props.editPlant}
                deletePlant={this.props.deletePlant}
                />
            </div>
        )
    }
}

export default Gallery;