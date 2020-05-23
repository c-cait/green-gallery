const plants = require('../../src/plantData.json');


module.exports = {
    getAllPlants: (req, res) => {
       res.status(200).send(plants)
    },

    getIndividualPlant: (req, res) => {
        //find() will return the value of the array element
        //we are using find() to return the plant object in the array
        //whose id matches the id in the url
        const foundPlant = plants.find(elem => {
            return elem.id === parseInt(req.params.id)
        })

        if(!foundPlant){
            res.status(404).send('plant not found')
        }

        res.status(200).send(foundPlant)
        
    },

    createPlant: (req, res) => {
        //grab the information that will be sent to us 
        const { name, image, sun, water, description} = req.body

        //create a new id based off the previous elems id
        let id = plants[plants.length - 1].id + 1

        //create new plant object
        newPlant = {id, name, image, sun, water, description}

        //add the new plant to the plants array
        plants.push(newPlant)

        //return the plants array if successful
        res.status(200).send(plants)


    },

    updatePlant: (req, res) => {
        //we need to grab the updated info the client will send 
        const { name, image, sun, water, description } = req.body
        
        //we must get the index of the elem(object in plants array)
        //that the user is trying to access/update
        const index = plants.findIndex(elem => elem.id === parseInt(req.params.id))

        //if that index does not exist, meaning there is no plant at the index
        //handle that error
        if(index === -1){
            res.status(404).send('plant not found')
        }

        //we are creating an updated plant object
        //the values will either be the new ones that were updated 
        //or if no update then it will default to previous value
        const updatedPlant = {
            id: parseInt(req.params.id),
            name: name || plants[index].name,
            image: image || plants[index].image,
            sun: sun || plants[index].sun,
            water: water || plants[index].water,
            description: description || plants[index].description
        }

        //now we are able to access the obj through the plants array and index
        //and basically 'replace' that obj with the updated one
        plants[index] = updatedPlant

        res.status(200).send(plants[index])
    },

    deletePlant: (req, res) => {
        //access the index of the plant we are trying to delete by its id
        const index = plants.findIndex(elem => elem.id === parseInt(req.params.id))

        //findIndex() return -1 if the index doesnt exist, meaning no plant 
        //handle error
        if(index === -1){
            res.status(404).send('plant not found')
        }

        //else we want to delete that plant, which we are accessing by its index
        plants.splice(index, 1)

        //we want to return the entire plants array
        res.status(200).send(plants)
    }
}