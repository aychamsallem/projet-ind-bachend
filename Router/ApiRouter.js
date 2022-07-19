import express from "express";
import asyncHandler from "express-async-handler";


const router = express.Router();
import {
    Addreservation
  } from "../controllers/Apireseravtion.js";


  router.route("/reservation").post( Addreservation);

  
export default router 