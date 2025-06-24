import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  rating: Number,
});

export default mongoose.model('Product', productSchema);
