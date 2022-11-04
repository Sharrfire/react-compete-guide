import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT = [
  {
    id: 1,
    price: 6,
    title: 'book',
    description: 'a book',
  },
  {
    id: 2,
    price: 10,
    title: 'toy',
    description: 'a toy',
  },
  {
    id: 3,
    price: 2,
    title: 'pen',
    description: 'a pen',
  },
];
const Products = (props) => {
  // const product=useSelector((state) => state.)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
