import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    concern: { type: String, required: true },
    whatsappOptIn: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent OverwriteModelError in Next.js
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
