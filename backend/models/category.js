import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Fyll ut kategori navn'],
    },
    value: String,
    label: String,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual('article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'article',
  justOne: false,
});

export default mongoose.model('Category', CategorySchema);
