import asyncHandler from "express-async-handler";
import Admin from "./Model/Admin.js"



const Admin = asyncHandler(async (req, res) => {
    console.log(req.body);
    const Admin = new Admin({
        typechambre : req.body. typechambre ,
        Disponnibilité : req.body.Disponnibilité ,
        prix: req.body.prix,
        
    });
    await Admin.save();
    
  });

  export {
    Admin
  }