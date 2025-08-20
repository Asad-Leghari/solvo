import mongoose, { Schema, Document } from "mongoose";

export interface Services extends Document {
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServicesSchema: Schema<Services> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ServicesModel =
  (mongoose.models.Services as mongoose.Model<Services>) ||
  mongoose.model<Services>("Services", ServicesSchema);

export default ServicesModel;
