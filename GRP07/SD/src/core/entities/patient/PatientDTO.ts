import { IPatientDTO } from "../interfaces/patientDto";

export class PatientDTO {
  public name!: string;
  public healthInsuranceCardId!: string;
  public address!: string;

  constructor(props: IPatientDTO) {
    this.address = props.address;
    this.name = props.name;
    this.healthInsuranceCardId = props.healthInsuranceCardId;
  }
}
