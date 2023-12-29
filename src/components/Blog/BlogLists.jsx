import React from 'react'

export const BlogLists = ({blogs}) => {
  return (
    <div className='p-10 text-left bg-stone-300'>
        {blogs.map((blog) => (
            <div className="blog-preview my-5 flex md:flex-row flex-col items-center md:space-x-10" key={blog.id}>
                <img src={blog.picture} alt="" className='h-[30rem] w-[50rem] object-cover'/>
                <div>
                  <h2 className='text-2xl text-yellow-600 mt-5 mb-1'>{blog.title}</h2>
                  <p className='text-sm italic'>Written by {blog.author}</p>
                  <p className='underline my-5'>Read More</p>
                </div>
                
            </div>
        ))}
    </div>
  )
}
export default BlogLists;
