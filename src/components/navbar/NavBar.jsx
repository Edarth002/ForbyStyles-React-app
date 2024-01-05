import image1 from '../../Assets/logo222-removebg-preview.png';
import image2 from '../../Assets/Instagram.png';
const NavBar = () => {
  return ( 
    <div className='flex justify-between items-center px-5 md:pt-0 pt-5'>
      <img src={image1} alt="" className='w-1/12 min-w-10 max-w-16 hover:scale-110' />
      <div className='md:w-[4%] w-11 min-w-10 bg-yellow-400 flex md:flex-row flex-col md:p-2 p-2 items-center justify-center rounded-3xl md:space-x-4'>
          <a href=" https://www.instagram.com/forby_styles?igsh=OGQ5ZDc2ODk2ZA== " className=''> <img src={image2} alt="" className='hover:scale-125' /></a>
      </div>
    </div>
   );
}
 
export default NavBar;

