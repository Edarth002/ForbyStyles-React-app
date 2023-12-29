import NavBar from '../navbar/NavBar';
import blog2 from '../../Assets/model2.jpg'
import blog3 from '../../Assets/model3.jpg'
import blog4 from '../../Assets/model4.jpg'
import blogimage from '../../Assets/Blog.jpg'
import { useEffect, useState } from 'react';
import BlogLists from './BlogLists';
export const BlogPage = () => {
    const [blogs, setBlogs] = useState([{
        "picture": blog2,
         "title":"Crafting Custom Elegance: The Art of Bespoke Fashion",
         "body": "Welcome to Forby Styles, where fashion meets individuality! In this blog post, we delve into the exquisite world of bespoke fashion. Discover the craftsmanship, attention to detail, and personalization that goes into creating custom-made clothing tailored just for you. Topics Covered: The Bespoke Experience: Explore the unique journey of creating custom-made attire. From initial consultations to fabric selection and fittings, each step is a collaborative process between the client and our skilled designers. Materials and Quality: Learn about the premium materials and fabrics used in our bespoke creations. We believe in quality that stands the test of time, ensuring that your custom piece is a true investment in style. Celebrating Individual Style: Forby Styles celebrates the essence of individuality. Explore how our bespoke designs allow you to express your personality through fashion. No two pieces are the same, reflecting the uniqueness of each wearer.",
         "author":"Stella", "id":1
     },
     {
         "picture": blog3,
         "title":"Fashion Forward: Trends and Innovations at Forby Styles", 
         "body":"Step into the world of cutting-edge fashion at Forby Styles! In this blog post, we're excited to share the latest trends and innovations shaping our collections. From runway-inspired looks to forward-thinking designs, discover what sets Forby Styles apart in the world of fashion Topics Covered; Trendspotting: Dive into the current fashion landscape and explore how Forby Styles interprets and adapts the latest trends. From colors to silhouettes, we're at the forefront of what's haute. Innovative Design Techniques: Learn about the innovative design techniques employed by our talented team. Whether it's unique draping, intricate embellishments, or avant-garde silhouettes, we're pushing the boundaries of conventional fashion. Sustainability in Style: Explore how Forby Styles incorporates sustainable practices into our designs. Discover eco-friendly fabrics, ethical production methods, and our commitment to creating fashion with a conscience.",
         "author":"Arthur", "id":2
     },
     {
         "picture": blog4,
         "title":"The Forby Styles Lookbook: A Glimpse into Timeless Elegance", 
         "body":"Get ready to be inspired as we unveil The Forby Styles Lookbook! In this blog post, we take you on a visual journey through our latest collections, showcasing timeless elegance and sophisticated designs that define the signature Forby Styles aesthetic. Topics Covered: Seasonal Highlights: Explore the standout pieces from our seasonal collections. From spring florals to winter glamour, each piece is curated to capture the essence of the season. Iconic Ensembles: Discover the signature pieces that define Forby Styles. These iconic ensembles seamlessly blend classic elements with contemporary flair, creating looks that stand the test of time. Styling Tips: Get insider tips on how to style Forby Styles pieces for various occasions. Whether it's a formal event or a casual day out, our lookbook provides inspiration for creating stunning outfits that reflect your personal style.",
         "author":"Blessing", "id":3
     }

    ]);
    // useEffect(() =>{
    //     fetch("http://localhost:3001/blogs")
    //     .then(res => {
    //        return res.json()
    //     })
    //     .then (data => {
    //         console.log(data);
    //         setBlogs(data)
    //     });
    // }, []);
  return (
    <div className='bg-stone-400'>
        <NavBar/>
        <img src={blogimage} alt="" className='px-5 pb-5 mx-auto w-full h-[80vh] object-cover flex justify-center' />
        
        <BlogLists blogs = {blogs} />
    </div>
  )
}
export default BlogPage;