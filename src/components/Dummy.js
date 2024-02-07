"use client"
import Image from 'next/image'
import Link from 'next/link'
import ProductRate from './ProductRate'
import AddToCart from './AddToCart'

import React from 'react'


import { useState, useEffect } from 'react';

function Dummy() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className='card'>
        {products.map(product => (
          <div key={product.id} >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product.images}
                        width={400}
                        height={400}
                        alt={product.name}
                        className="rounded shadow object-cover h-96 w-full"
                    />
                </Link>
                <div className="flex flex-col items-center justify-center p-5">
                    <Link href={`/product/${product.id}`}>
                    <h2 className="text-lg">{product.name}</h2>
                    </Link>
                    <ProductRate rate={product.rating} count={product.numReviews} />
                    <p className="mb-2">{product.brand}</p>
                    <p>${product.price}</p>
                    <AddToCart
                    showQty={false}
                    product={product}
                    increasePerClick={true}
                    redirect={false}
                    />
                </div>
                </div>

          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dummy;
