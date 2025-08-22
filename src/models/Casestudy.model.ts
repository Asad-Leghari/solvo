import mongoose, { Schema, Document } from "mongoose";

export interface CaseStudy extends Document {
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const CaseStudySchema: Schema<CaseStudy> = new Schema(
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

const CaseStudyModel =
  (mongoose.models.CaseStudy as mongoose.Model<CaseStudy>) ||
  mongoose.model<CaseStudy>("CaseStudy", CaseStudySchema);

export default CaseStudyModel;
