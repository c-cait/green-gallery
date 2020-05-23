import React, {Component} from 'react';

class NewPlant extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            image: '',
            sun: '',
            water: '',
            description: ''
        }
    }

    handleName(e){}

    handleImage(e){}

    handleSun(e){}

    handleWater(e){}

    handleDescription(e){}

    render(){
        return(
            <div>
                NewPlant.js
            </div>
        )
    }
}

export default NewPlant;