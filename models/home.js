const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    topTitulo:{
        type:String
    },
    topSubTitulo:{
        type:String
    },
    topTextobtn:{
        type:String
    },
    topLinkBtn:{
        type:String
    },
    serTitulo:{
        type:String
    },
    serSubTitulo:{
        type:String
    },
    serUmIcon:{
        type:String
    },
    serUmTitulo:{
        type:String
    },
    serUmDescricao:{
        type:String
    },
    serDoisIcon:{
        type:String
    },
    serDoisTitulo:{
        type:String
    },
    serDoisDescricao:{
        type:String
    },
    serTresIcon:{
        type:String
    },

    serTresTitulo:{
        type:String
    },

    serTresDescricao:{
        type:String
    },
    serQuatroIcon:{
        type:String
    },

    serQuatroTitulo:{
        type:String
    },

    serQuatroDescricao:{
        type:String
    },
    serCincoIcon:{
        type:String
    },

    serCincoTitulo:{
        type:String
    },

    serCincoDescricao:{
        type:String
    }


},{
    timestamps:true    

});

mongoose.model('Home',home);