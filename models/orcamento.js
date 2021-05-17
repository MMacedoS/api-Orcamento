const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orcamento = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    telefone:{
        type:String
    },
    whatsapp:{
        type:String
    },
    proposta:{
        type:String
    },
},{
    timestamps:true    

});

mongoose.model('Orcamento',orcamento);