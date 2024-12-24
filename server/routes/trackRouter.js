import { Router } from "express";
import { setTrack } from "../controllers/trackController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const trackRouter = Router();

trackRouter.post("/post", isAuthenticated, setTrack);

export default trackRouter;
