import { Request, Response } from "express";
import { IBodyPatient } from "../entities/interfaces/patientDto";
import patientService from "../services/patientService";
import swaggerDocument from "../../swagger.json";

const getAllPatients = async (request: Request, response: Response) => {
  try {
    const allPatients = await patientService.getAllPatients();
    return response.status(200).json(allPatients);
  } catch (error: any) {
    return response.status(400).json({ statusCode: 400, message: `${error}` });
  }
};

const findPatient = async (request: Request, response: Response) => {
  try {
    const patient = await patientService.findPatient(request.params.id);
    if (!patient) {
      return response
        .status(404)
        .json({ statusCode: 404, message: "Not Found" });
    }
    return response.status(200).json(patient);
  } catch (error: any) {
    return response.status(400).json({ statusCode: 400, message: `${error}` });
  }
};

const postPatient = async (request: Request, response: Response) => {
  try {
    const { patient }: IBodyPatient = request.body;
    if (patient) {
      await patientService.postPatient(patient);
      return response.status(201).send("Successful operation");
    }
    return response
      .status(400)
      .json({ statusCode: 400, message: "invalid propertys" });
  } catch (error) {
    return response.status(400).json({ statusCode: 400, message: `${error}` });
  }
};

const deletePatient = async (request: Request, response: Response) => {
  try {
    const isPatient = await patientService.findPatient(request.params.id);
    if (!isPatient) {
      return response
        .status(404)
        .json({ statusCode: 404, message: "Patient Not Found" });
    }
    await patientService.deletePatient(request.params.id);
    return response.status(201).send("The patient was deleted successfully");
  } catch (error: any) {
    return response.status(400).json({ statusCode: 400, message: `${error}` });
  }
};

const updatePatient = async (request: Request, response: Response) => {
  try {
    const { patient }: IBodyPatient = request.body;
    if (!patient) {
      return response
        .status(400)
        .json({ statusCode: 400, message: "invalid properties" });
    }
    await patientService.updatePatient(request.params.id, patient);
    return response.status(201).send("Successful operation");
  } catch (error) {
    return response.status(400).json({ statusCode: 400, message: `${error}` });
  }
};

const getSwaggerDoc = (request: Request, response: Response) => {
  if (!swaggerDocument)
    return response
      .status(404)
      .json({ statusCode: 404, message: "Document Not Found" });

  return response.json(swaggerDocument);
};

export default {
  postPatient,
  updatePatient,
  deletePatient,
  findPatient,
  getAllPatients,
  getSwaggerDoc,
};
