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


  import {
    AdminEdit
    }  from "../controllers/ApiAdminEdit.js";
    router.route("/chambre").post(AdminEdit);

  
    import {
      Getchambre
      }  from "../controllers/Apigetchambre.js";
      router.route("/getchambre").get(Getchambre);


      
export default router 