import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
  },
});
export default mongoose.models.Car || mongoose.model("Car", carSchema);
