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
    ingress: {
      type: String,
      required: [true, 'Artikkelen må ha inngress'],
    },
    content: [
      {
        subtitle: {
          type: String,
        },
        content: {
          type: String,
        },
      }
    ],
    image: {
      type: String,
    },
    category: {
      type: String,
      required: [true, 'Må ha en kategori'],
    },
    publishdate: {
      type: Date, // '2002-12-09'
    },
    public: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Article', ArticleSchema);
