import { v4 as uuidv4 } from "uuid";
import { IPatient } from "../interfaces/patient";
import { IPatientDTO } from "../interfaces/patientDto";

export class Patient implements IPatient {
  public readonly id!: string;
  public name!: string;
  public healthInsuranceCardId!: string;
  public address!: string;
  public readonly createdAt!: string;

  constructor(props: IPatientDTO) {
    this.checkIsValidProperty(props);
    Object.assign(this, props);

    this.id = uuidv4();
    this.createdAt = new Date(Date.now()).toISOString().slice(0, 10);
  }

  checkIsValidProperty(props: IPatientDTO) {
    if (!props.name) {
      throw new Error("Invalid property name");
    }
    if (!props.healthInsuranceCardId) {
      throw new Error("Invalid property healthInsuranceCardId");
    }
    if (!props.address) {
      throw new Error("Invalid property address");
    }
  }
}
