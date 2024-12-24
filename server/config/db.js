import mongoose from "mongoose";

(async function () {
  try {
    await mongoose.connect(process.env.CONNECTION);
    console.log("Connected to DB!");
  } catch (err) {
    console.log("Error connecting to DB ", err);
  }
})();

export default mongoose;
