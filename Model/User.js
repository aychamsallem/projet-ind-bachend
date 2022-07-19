import mongoose from 'mongoose'

const Userschema = mongoose.Schema({


    id:{
        type : string ,
        required: true,

    },


    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Mdp: {
        type: String,
        
    },
    email :{
        type : string ,
        default :true , 
    },
   num_tel :{
    type: string,

},


    

});

const User = mongoose.model('reservation', Userschema)
export default User