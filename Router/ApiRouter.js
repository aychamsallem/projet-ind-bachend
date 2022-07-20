import express from "express";
import asyncHandler from "express-async-handler";


const router = express.Router();
import {
    Addreservation
  } from "../controllers/Apireseravtion.js";
import {
  Admin
  }  from "../controllers/Apiadmin.js";

  router.route("/reservation").post( Addreservation);
  router.route("/Admin").post(Admin);
  
export default router 