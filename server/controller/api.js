const Data = require('../schema/db_schema')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../error/custom-error')

//Get all data
const getAllData = asyncWrapper (async (req, res) => {
    const data_barang = await Data.find({})
    res.status(200).json({ data_barang })
})

//get data by:id 
const getData = asyncWrapper (async (req, res, next) => {
    const { id : barang } = req.params
    const data_barang_id = await Data.findOne({ _id: barang })
    if (!data_barang_id) {
        return next(createCustomError(`tidak ada data barang dengan id : ${ barang}`, 404))
    }
    res.status(200).json({data_barang_id})
})

//post data
const createData = asyncWrapper (async (req, res) => {
    const data_input = await Data.create(req.body) 
    res.status(200).json({ data_input });
})

//update data
const updateData = asyncWrapper (async (req, res, next) => {
    const { id : barang } = req.params
    const data_barang_id = await Data.findOneAndUpdate({ _id: barang }, req.body)
     if (!data_barang_id) {
       return next(
         createCustomError(`tidak ada data barang dengan id : ${barang}`, 404)
       );
     }
    res.status(200).json({data_barang_id})
})

//deleted data
const deletedData = asyncWrapper (async (req, res, next) => {
    const { id : barang } = req.params
    const data_barang_id = await Data.findOneAndDelete({ _id: barang }, req.body)
     if (!data_barang_id) {
       return next(
         createCustomError(`tidak ada data barang dengan id : ${barang}`, 404)
       );
     }
    res.status(200).json({data_barang_id})
})

module.exports = {
    getAllData,
    getData,
    createData,
    updateData,
    deletedData
};