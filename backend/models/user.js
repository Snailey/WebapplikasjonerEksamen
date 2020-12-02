import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Fyll ut Brukernavn'],
    },
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Fyll ut passord'],
      minlength: [6, 'Passordet må minmum bestå av 6 verdier'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'super'],
        message: 'Rolle ikke fylt ut',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('User', UserSchema);
