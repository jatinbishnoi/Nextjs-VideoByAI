import mongoose, { Schema, model, models } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// ⛔️ Removed pre("save") hook to avoid double-hashing

const User = models?.User || model<IUser>("User", userSchema);

export default User;
