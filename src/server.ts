import mongoose from "mongoose";

import { DATABASE_USERNAME, DATABASE_PASSWORD } from "../config/database";
import App from "./App";

const main = async () => {
  const dbUri = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@auth-node.eatqmva.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(dbUri);
  console.log("Mongoose working");
  App.start(3000);
};
main().catch((err) => {
  console.log(err.message);
});
