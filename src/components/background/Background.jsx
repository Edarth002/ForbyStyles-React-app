import React from 'react'
import image1 from '../../Assets/cat6.jpg'
import blog2 from '../../Assets/model6.jpg'
export const Background = () => {
   return(
         <div>
            <img src={image1} alt="" className='h-full w-full scale-125 md:block hidden blur-[1px] float-left top-0 left-0 right-0 bg-center bottom-0 p-0 fixed object-cover -z-10' />
            <img src={blog2} alt="" className='h-full w-full block md:hidden scale-125 blur-[1px] float-left top-0 left-0 right-0 bg-center bottom-0 p-0 fixed object-cover -z-10' />
         </div>
          )

}
export default Background;
