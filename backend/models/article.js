import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Fyll ut overskrift'],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Det må finnes en frofatter av artikkelen'],
    },
    content: {
      type: String,
      required: [true, 'Artikkelen må ha innhold'],
    },
    category: {
      type: String,
      required: [true, 'Må ha en kategori'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Article', ArticleSchema);
