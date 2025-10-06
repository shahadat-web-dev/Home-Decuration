
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useProducts from '../Hooks/useProducts';
import { NavLink } from 'react-router';

const Home = () => {
  // const products = useLoaderData()
  // console.log(products);

  const {products, loading , error} = useProducts()
  const featuredProducts = products.slice(0,6)

  return (
    <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>Featured Products</h1>
        <NavLink className='btn btn-outline text-lg' to='/products'>See All Products</NavLink>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          featuredProducts.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default Home;