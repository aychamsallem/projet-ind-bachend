import mongoose from 'mongoose'

const chambreSchema = mongoose.Schema({
    type : {
        type: String,
        required: true
    },
    
    prix: {
        type: String,
        
    },
    

    dispo :{
        type: String,
        required: true,
    },


    img :{
        type: String,
        required: true
    },

});

const Chambre= mongoose.model('chambre', chambreSchema)
export default Chambre