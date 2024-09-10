import React from 'react'
import BlogCard from './BlogCard'

const data = [
  {
    comment: 6,
    title: "fresh vegs",
    date: "25 aug 2024",
    img: "/post__1.webp"
  },
  {
    comment: 9,
    title: "fresh vegs",
    date: "25 aug 2024",
    img: "/post__2.webp"
  },
  {
    comment: 3,
    title: "fresh vegs",
    date: "25 aug 2024",
    img: "/post__3.webp"
  }

]


const Blog = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className='font-bold text-2xl'>Latest Newss</h2>
        <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, 
        voluptatum?</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {
            data.map(el => <BlogCard date={el.date} img={el.img} title={el.title} comment={el.comment} />)
          }
        </div>
      </div>
    </>
  )
}

export default Blog