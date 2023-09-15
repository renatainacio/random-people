import personController from "@/controllers/person.controller";
import { Router } from "express";

const personRouter = Router();

personRouter.get("/person", personController.getRandomPerson);

export default personRouter;