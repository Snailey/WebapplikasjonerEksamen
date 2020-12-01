import mongoose from 'mongoose';

const { Schema } = mongoose;

const OfficeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Fyll ut Navn på kontor'],
    },
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true,
    },
    city: {
      type: String,
      required: [true, 'Fyll ut byen kontoret ligger i'],
    },
    address: {
      type: String,
      required: [true, 'Fyll ut gateadresse til kontoret'],
    },
    phone: {
      type: Number,
      required: [true, 'Fyll ut telefonnr til kontoret'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Office', OfficeSchema);
