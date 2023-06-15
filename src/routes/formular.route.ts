import express from "express";
import * as FormularController from "../controllers/formular.controller";

const router = express.Router();

router.post("/results", FormularController.getResults);

export default router;
