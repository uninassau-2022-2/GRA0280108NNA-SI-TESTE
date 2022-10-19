import { Router } from "express";
import patientController from "../controllers/patientController";
import path from "./path";

const router = Router();
const byId: string = "/:id";

router
  .get(path.patient, patientController.getAllPatients)
  .post(path.patient, patientController.postPatient)
  .get(path.patient + byId, patientController.findPatient)
  .delete(path.patient + byId, patientController.deletePatient)
  .patch(path.patient + byId, patientController.updatePatient)
  .get(path.swaggerDoc, patientController.getSwaggerDoc);

export default router;
