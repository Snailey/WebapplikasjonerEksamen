// hentet fra forelesningseksempler
import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Image', ImageSchema);
