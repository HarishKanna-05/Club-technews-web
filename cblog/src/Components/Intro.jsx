import React from 'react';

function Intro() {
  return (
    <div >
    <div className=' bg-[#D9D9D9] w-full  relative'>
      <div className='flex justify-center'>
      <img className=' md:h-[709px] md:w-[586px] sm:h-[354px] sm-[293px] absolute  ' src=".././src/Images/Intro.png" alt="" />
      </div>
        <div className='flex justify-center gap-[400px]'>
          <h1 className='md:text-[120px] sm:text-[60px] font-[Corinthia] font-bold '>
            We debug<br/> by day,
          </h1>
          <h1 className='font-[kaushan] md:text-[100px] sm:text-[50px]  italic font-bold mt-[250px] mb-[100px] '>
            Caffeinate <br/>by Night
          </h1>
        </div>
       
  
      <div className='flex justify-center z-0'>
            <img className=' absolute top-[495px] md:w-[1440px] md:h-[820px] sm:w-[720px] sm:h-[410px]' src=".././src/Images/absvg.png" alt="" />
          </div>
          <div className='flex justify-center w-full h-full'>
          <div className='absolute w-[700px] -bottom-[450px] ml-20'>
            <h1 className='font-sans font-semibold text-center text-4xl pb-5 text-white'>VISION AND MISSION</h1>
            <h1 className='font-serif text-white text-3xl text-justify'>To create a dynamic community of developers who are passionate about technology and innovation, and who collaborate to solve real-world problems and create value for society.
Our goal is to inspire and empower our members to develop their skills, pursue their interests, and make a positive impact on the world through technology.</h1>
          </div>

          </div>
    </div>
    <div className='bg-gradient-to-b from-[#D9D9D9] to-white h-[700px] w-full'></div>
    </div>

  );
}

export default Intro;
