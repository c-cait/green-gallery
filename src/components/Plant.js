import React, {Component} from 'react';

class Plant extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            image: '',
            sun: '',
            water: '',
            description: '',
            editMode: false
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
                Plant.js
            </div>
        )
    }
}

export default Plant