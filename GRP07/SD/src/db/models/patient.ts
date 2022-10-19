import mongoose from "../db";

const PatientSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      format: "uuid",
    },
    name: {
      type: String,
      required: true,
    },
    healthInsuranceCardId: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      unique: false,
      lowercase: true,
      required: true,
    },
    createdAt: {
      type: String,
      default: Date.now,
    },
  },
  { id: false }
);

const PatientModel = mongoose.model("Patient", PatientSchema);

export default PatientModel;
