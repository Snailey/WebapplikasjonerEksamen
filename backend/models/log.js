import mongoose from 'mongoose';

const { Schema } = mongoose;

const LogSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    views: {
      type: Number,
    },
    time: {
      type: Number,
    },
    users: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
        },
        views: {
          type: Number,
        },
        time: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Log', LogSchema);
