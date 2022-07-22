const mongoose = require('mongoose');

const dataBarang = new mongoose.Schema({
    namabarang: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    jumlah: {
        type: Number,
        required: [true, "Masukan angka !"]
    },
    harga: {
        type: Number,
        required: [true, "Masukan angka"]
    },
   
})

const Data = mongoose.model('Data', dataBarang);

module.exports = Data
