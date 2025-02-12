import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    // Correctly use useState to initialize latestProducts
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Check if products is available and has content before slicing
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // Include products in dependency array to update on change

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Dive into a diverse range of apparel that includes everything from chic dresses and tailored blazers to casual tees and comfy loungewear...
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;