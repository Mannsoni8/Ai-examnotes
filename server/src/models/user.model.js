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
      ref: "Notes",
      default: [],
    },

    // password: {
    //   type: String,
    //   required: true,
    //   match: [
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
    //     "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character",
    //   ],
    //   select: false,
    // },
  },

  {
    timestamps: true,
  },
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
