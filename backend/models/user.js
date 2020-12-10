// mye er hentet fra forelesningseksempler
import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

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
      minlength: [6, 'Passordet må minmum bestå av 6 tegn'],
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

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  console.log(password);
  const result = argon2.verify(this.password, password);
  return result;
};

UserSchema.virtual('article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

export default mongoose.model('User', UserSchema);
