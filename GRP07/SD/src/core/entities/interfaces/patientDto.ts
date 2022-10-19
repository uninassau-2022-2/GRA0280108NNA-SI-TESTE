export interface IPatientDTO {
  name: string;
  healthInsuranceCardId: string;
  address: string;
}

export interface IBodyPatient {
  patient: IPatientDTO;
}
