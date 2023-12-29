import React, { useState, useEffect } from 'react';
import Background from '../background/Background';
import NavBar from '../navbar/NavBar';
export const Hero = ({ targetDate }) => {

  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyEmail = () => {
    // Simple email validation logic (you may want to use a more robust validation library)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    setIsValid(isValidEmail);

      
};

   const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }else{
        timeLeft = {
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0',
          };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);


  return (
    <div className="hero-section ">
        <div className='text-white'>
            <Background/>
            <NavBar/>
                <div className='Hero text-white p-5 text-center'>
                    <h1 className='md:text-5xl text-3xl md:w-1/3 mx-auto md:mt-0 mt-10 mb-3'>A New Era in Fashion Awaits</h1>
                    <p>Counting down to the grand reveal of Forby Styles. Unleash your style in...</p>
                </div>
                <div className='border border-yellow-400 md:min-w-[40rem] md:w-1/2 w-[95%] md:mx-auto md:p-10 p-5 flex items-center mx-3'>
                    <div className='mx-auto flex flex-col md:w-1/5 items-center'>
                        <p  className='md:text-6xl text-3xl'>{timeLeft.days}</p>
                        <p className='text-center italic text-yellow-400'>Days</p>
                    </div>
                    <div className='mx-auto flex flex-col md:w-1/5 items-center'>
                        <p  className='md:text-6xl text-3xl'>{timeLeft.hours}</p>
                        <p className='text-center italic text-yellow-400'>Hours</p>
                    </div>
                    <div className='mx-auto flex flex-col md:w-1/5 items-center'>
                        <p  className='md:text-6xl text-3xl'>{timeLeft.minutes}</p>
                        <p className='text-center italic text-yellow-400'>Minutes</p>
                    </div>
                    <div className='mx-auto flex flex-col md:w-1/5 items-center'>
                        <p  className='md:text-6xl text-3xl'>{timeLeft.seconds}</p>
                        <p className='text-center italic text-yellow-400'>Seconds</p>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:items-start items-center space-x-4 mx-auto mt-10 md:w-[48%] justify-center w-full'>
                  <div className='flex flex-col items-center w-[90%]'>
                    <input type="email" onChange={handleEmailChange} name="email" id="email" placeholder='Email Address' className='md:min-w-[20rem] border outline-none bg-transparent border-yellow-400 rounded-full py-2 px-4 md:w-[65%] w-full'/>
                    {isValid && <p className="text-green-600">Email is valid!</p>}
                    {!isValid && email && <p className="text-red-600">Please enter a valid email address.</p>}
                  </div>
                    
                    <a href="/" className='cursor-pointer hover:bg-black md:mt-0 mt-6 hover:text-yellow-400 md:min-w-[13rem] text-center bg-yellow-400 text-black rounded-full py-2 px-5' onClick={handleVerifyEmail}>Join The Countdown</a>
                </div>
        </div>       
    </div>
        
  )
}

export default Hero;