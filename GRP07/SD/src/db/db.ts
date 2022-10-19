import mongoose from "mongoose";
import * as env from "dotenv";
const dotenv = env.config({ path: process.cwd() + "/src/.env" }).parsed;

const connectionString: string = dotenv?.DB_CONNECTION
  ? dotenv.DB_CONNECTION
  : "";

let isConnect = false;

const millisecondsToWait = 10000;

(function connectDatabase() {
  mongoose
    .connect(connectionString)
    .then(() => {
      isConnect = true;
      console.log(`[server]: MongoDB was connected`);
    })
    .catch((error) => {
      console.log(`[Error]: ${error}`);
      console.log(`[Info]: Retry in ${millisecondsToWait} MS`);
      setTimeout(() => {
        connectDatabase();
      }, millisecondsToWait);
    });
})();

mongoose.Promise = global.Promise;

export default mongoose;
