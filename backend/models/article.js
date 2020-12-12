import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      // required: [true, 'Fyll ut overskrift'],
    },
    author: {
      type: String,
      // required: [true, 'Det må finnes en frofatter av artikkelen'],
    },
    ingress: {
      type: String,
      // required: [true, 'Artikkelen må ha inngress'],
    },

    content: {
      type: String,
      // required: [true, 'Artikkelen må ha innhold'],
    },
    image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Image',
    },
    category: {
      type: String,
      // required: [true, 'Må ha en kategori'],
    },
    publishdate: {
      type: Date, // '2002-12-09'
    },
    published: {
      type: Boolean,
      defult: false,
    },
    public: {
      type: Boolean,
      default: false,
    },
    readTime: {
      type: Number, // seconds
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Article', ArticleSchema);
