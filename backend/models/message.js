import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, 'Fyll ut melding'],
    },
    email: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Message', MessageSchema);
