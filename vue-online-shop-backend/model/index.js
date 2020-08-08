import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

// define document structure
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

// generate document
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

export { Product, Manufacturer };
