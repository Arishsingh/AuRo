import mongoose, { Schema, models } from "mongoose";

const WaitlistSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export const Waitlist = models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
