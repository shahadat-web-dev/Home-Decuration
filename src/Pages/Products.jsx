
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../Hooks/useProducts';

const Products = () => {
  const { products } = useProducts()
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase()

   const searchedProducts = term? products.filter(product => product.name.toLocaleLowerCase().includes(term)): products
  //  console.log(searchedProducts);
   
  
  return (
    <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>All Products <span className='text-sm text-gray-500'>({products.length}) Product Found</span></h1>

        <label className="input">         
          <input value={search} onChange={e => setSearch(e.target.value)} className='text-lg font-bold' type="Search" placeholder="Search Products" />
        </label>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          searchedProducts.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default Products;