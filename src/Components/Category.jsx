import React from 'react';
import Categorycard from './Categorycard';

const data = [
  {
    id: 0,
    name: "fresh fruits",
    count: "9 Products",
    img: "/category__1.webp"
  },
  {
    id: 1,
    name: "fresh vegs",
    count: "8 Products",
    img: "/category__2.webp"
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "19 Products",
    img: "/category__3.webp"
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "5 Products",
    img: "/category__4.webp"
  },
  {
    id: 4,
    name: "Fishes",
    count: "15 Products",
    img: "/category__5.webp"
  },
  {
    id: 5,
    name: "egs & Dairy",
    count: "5 Products",
    img: "/category__6.webp"
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "15 Products",
    img: "/category__7.webp"
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "4 Products",
    img: "/category__7.webp"
  }

]

const Category = () => {
  return (
    <>
      <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(el => <Categorycard key={el.id} img={el.img} name={el.name} count={el.count} />)}
        </div>
      </div>
    </>
  )
}

export default Category