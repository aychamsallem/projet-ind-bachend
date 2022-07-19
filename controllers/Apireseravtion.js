import asyncHandler from "express-async-handler";
import Reservation from '../Model/Reservation.js'



const Addreservation = asyncHandler(async (req, res) => {
    console.log(req.body);
    const reservation = new Reservation({
        arriver: req.body. arriver,
        depart: req.body.depart,
        vue: req.body.vue,
        type_de_chambres :req.body.type_de_chambres,
        nbrNights : req.body.nbrNights,
    });
    await reservation.save();
    
  });

  export {
    Addreservation
  }