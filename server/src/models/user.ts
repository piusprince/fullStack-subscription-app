import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, min: 5, required: true },
});

export default mongoose.model("User", userSchema);
