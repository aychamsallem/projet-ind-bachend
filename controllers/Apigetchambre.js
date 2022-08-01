import asyncHandler from "express-async-handler";
import Chambre from "../Model/Chambre.js";


const Getchambre = asyncHandler(async (req, res) => {

  const chambre = await Chambre.find()

  // res.render("Form",{data:cat})aoolication normal deuxiéme res.json en applique les
  res.json({ data:chambre })
})
export {Getchambre}