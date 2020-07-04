import express from 'express';
import data from './data';

const app = express();


app.get("/api/products/:id", (req, res) => {
  console.log('calling 1 product')
  const productId = req.params.id;
  const product = data.products.find( x => x._id === productId );
  (product) ? res.send(product) : res.status(404).send({msg: 'Product not found.'});
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(8080, ()=> console.log('Ecommerce server at http://localhost:8080'));