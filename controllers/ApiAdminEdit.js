import asyncHandler from "express-async-handler";
import Chambre from "../Model/Chambre.js";

const AdminEdit= asyncHandler(async (req, res) => {
  console.log(req.body);
  const chambre = new Chambre({
    type: req.body.type,
    prix: req.body.prix,
    dispo: req.body.dispo,
    img: req.body.img,
  });
  await chambre.save();
});

export { AdminEdit };