import mongoose from "mongoose";

// const Schema = mongoose.Schema;

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: Number,
    },
  },
  {
    collection: "student",
  }
);

export default mongoose.model('Student', studentSchema);