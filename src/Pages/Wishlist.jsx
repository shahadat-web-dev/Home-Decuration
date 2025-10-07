import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Wishlist = () => {
  const [sortOrder, setSortOrder] = useState('none')
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('wishlist'))
    if (savedList) setWishlist(savedList)
  }, [])

  if(!wishlist.length) return <p className='text-2xl font-bold'>No Data Avilable</p>

  const sortedItem = (
    () => {
      if (sortOrder === 'price-asc') {
        return [...wishlist].sort((a, b) => a.price - b.price)
      }
      else if (sortOrder === 'price-dasc') {
        return [...wishlist].sort((a, b) => b.price - a.price)
      }
      else {
        return wishlist
      }

    })()

// wishLish card remove
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('wishlist'))
    let updatedList = existingList.filter(p => p.id !== id)
    //  for ui instant update
    setWishlist(updatedList)
    localStorage.setItem('wishlist', JSON.stringify(updatedList))

  }

  // generate chat data
  const totalByCategory = {}
  wishlist.forEach(product => {
    const category = product.category
    totalByCategory[category ] = (totalByCategory[category] || 0 + product.price)
  })

  const chartData = Object.keys(totalByCategory).map(category => ({
     category,
    total: totalByCategory[category]
  }))
  console.log(chartData);
  


  return (
    <div className='space-y-6'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>Wishlist <span className='text-sm text-gray-500'>({wishlist.length}) Product Found</span></h1>

        <label className='form-control w-full max-w-xs'>
          <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="none">Sort by price</option>
            <option value="price-asc">Low to High</option>
            <option value="price-dasc">High to Low</option>
          </select>
        </label>

      </div>

      <div className='space-y-3'>
        {
          sortedItem.map(p => (
            <div className="border card card-side bg-base-100 shadow-sm">
              <div className="card-body">
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <figure className='w-40 h-28 object-cover'>
                      <img
                        src={p.image}
                        alt={p.name} />
                    </figure>
                    <div>
                      <h2 className="card-title font-bold">{p.name}</h2>
                      <p>{p.category}</p>
                    </div>
                  </div>
                  <div className="pr-4 flex items-center gap-3">
                    <div className='font-semibold'>${p.price}</div>
                    <button onClick={() => handleRemove(p.id)} className='btn btn-outline'>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* chart */}
      <div className='space-y-3'>
        <h3 className='text-xl font-semibold'>WishtList Summery</h3>
        <div className='bg-base-100 border p-4 rounded-xl h-80'>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
             
              data={chartData}
             
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />

            

              <Bar dataKey="total" fill="#82ca9d"  />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default Wishlist;