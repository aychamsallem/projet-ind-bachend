import mongoose from 'mongoose'

const adminschema = mongoose.Schema({
    typechambre : {
        type: String,
        required: true
    },
    Disponnibilité :{
        type: String,
        required: true
    },
    prix: {
        type: String,
        
    },
    

});

const Admin = mongoose.model('Admin', adminschema)
export default Admin