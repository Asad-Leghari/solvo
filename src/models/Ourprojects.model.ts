import mongoose, { Schema, Document } from "mongoose";

export interface OurProjects extends Document {
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const OurProjectsSchema: Schema<OurProjects> = new Schema(
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

const OurProjectsModel =
  (mongoose.models.OurProjects as mongoose.Model<OurProjects>) ||
  mongoose.model<OurProjects>("OurProjects", OurProjectsSchema);

export default OurProjectsModel;
