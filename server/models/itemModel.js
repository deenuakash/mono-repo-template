import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const itemSchema = new Schema(
  {
    userId: { type: ObjectId, ref: "users", required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    notes: { type: String, trim: true },
    resources: [
      {
        url: { type: String, required: true },
        note: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

const itemModel = model("items", itemSchema);

export default itemModel;
