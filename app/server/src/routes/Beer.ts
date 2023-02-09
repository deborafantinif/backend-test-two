import BeerController from "../controllers/Beer";
import { Router } from "express";
import BeerService from "../services/Beer";

const beerService = new BeerService();
const beerController = new BeerController(beerService);

const routeBeer = Router();

routeBeer.route("/:id").get((req, res) => beerController.readOne(req, res));
routeBeer.route("/").get((req, res) => beerController.read(req, res));

export default routeBeer;