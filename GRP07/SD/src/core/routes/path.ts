interface IPath {
  swagger: string;
  swaggerDoc: string;
  baseUrl: string;
  patient: string;
}

const path: IPath = {
  swagger: "/swagger",
  swaggerDoc: "/swagger.json",
  patient: "/patients",
  baseUrl: "/api/v1",
};

export default path
