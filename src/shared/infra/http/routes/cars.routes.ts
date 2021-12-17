import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarsSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarsSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UploadCarImageController } from "@modules/cars/useCases/uploadImage/UploadCarImageController";
import multer from "multer";
import uploadConfig from "@config/upload"

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationController =
  new CreateCarsSpecificationController();
  const uploadCarImagesController = new UploadCarImageController()

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarsSpecificationController.handle
);

carsRoutes.post("/images/:id",ensureAuthenticated, ensureAdmin, upload.array("images"),uploadCarImagesController.handle)

export { carsRoutes };
