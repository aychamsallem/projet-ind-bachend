import mongoose from 'mongoose'

const reseravtionschema = mongoose.Schema({
    arriver: {
        type: String,
        required: true
    },
    depart: {
        type: String,
        required: true
    },
    vue: {
        type: String,
        
    },
    
    
type_de_chambres :{
    type: String,

},
nbrNights:{
    type : String ,
},

    

});

const Reservation = mongoose.model('reservation', reseravtionschema)
export default Reservation 