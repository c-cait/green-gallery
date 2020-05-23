const express = require('express');
const app = express();

app.use(express.json());

const ctrl = require('./controllers/plantsController')

//endpoints

//get all of the plants
app.get('/plants', ctrl.getAllPlants)

//get individual plant
app.get('/plants/:id', ctrl.getIndividualPlant)

//create a new plant
app.post('/plants', ctrl.createPlant)

//update individual plant
app.put('/plants/:id', ctrl.updatePlant)

//delete individual plant
app.delete('/plants/:id', ctrl.deletePlant)




app.listen(3000, () => console.log('server is running port 3000'))