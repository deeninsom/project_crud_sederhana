const express = require('express');
const route = express.Router();
const  {
    getAllData,
    getData,
    createData,
    updateData,
    deletedData
} = require('../controller/api')

route.route('/').get(getAllData).post(createData);
route.route('/:id').get(getData).patch(updateData).delete(deletedData)
    
module.exports = route;