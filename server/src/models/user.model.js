import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
    },

    credits: {
      type: Number,
      default: 50,
      min: 0,
    },

    isCreaditAvailable: {
      type: Boolean,
      default: true,
    },

    notes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "notes",
      default: [],
    },
  },

  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
