import React from 'react'
import Productcard from './Productcard'

const data = [
  {
    id: 0,
    name: "Dried Mango",
    price : "$500",
    img: "/product__1.webp"
  },
  {
    id: 1,
    name: "Curnchy Crips",
    price : "$300",
    img: "/product__2.webp"
  },
  {
    id: 2,
    name: "Jewel",
    price : "$300",
    img: "/product__3.webp"
  },
  {
    id: 3,
    name: "Almond",
    price : "$500",
    img: "/product__4.webp"
  },
]



const FeatureSectionFruits = () => {
  return (
    <>
      <div className='container pt-16'>
        <div className="lg:flex justify-between items-center">
          <div>
            <h3 className='font-medium text-2xl'>Fruits And Vegetables</h3>
            <p className='text-gray-600 mt-2'>Buy farm fresh fruits and vegetables  online at the best prices</p>
          </div>


          <div className='space-x-4 mt-8 lg:mt-0'>
            <button className="feature__btn">Fruits</button>
            <button className='text-gray-600 hover:text-accent'>Vegetables</button>
            <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div>
            <img className='w-full h-full object-cover' src="/feature__1.webp" alt="banner" />
          </div>
          {
            data.map(el=> <Productcard key={el.key} img={el.img} name={el.name} price={el.price}/>)
          }
        </div>
      </div>
    </>
  )
}
export default FeatureSectionFruits