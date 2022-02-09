const mongoose = require('../database');

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true
    },
    presencaConfirmada: {
        type: String,
        require: true
    },
    idDaListaPresentes: {
        type: String,
        require: true
    },
    DataConfirmacao: {
        type: Date,
        default: Date.now
    }
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;