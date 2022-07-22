import express from "express";
import asyncHandler from "express-async-handler";


const router = express.Router();
import {
    Addreservation
  } from "../controllers/Apireseravtion.js";
import {
  Addchambre
  }  from "../controllers/Apichambre.js";

  router.route("/reservation").post( Addreservation);
  router.route("/chambre").post(Addchambre);
  
export default router 