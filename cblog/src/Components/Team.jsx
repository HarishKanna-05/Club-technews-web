import React from 'react'

const teams=[
  {
    "id":1,
    'image': '.././src/Images/president.png',
    'name': 'JON SMITH',
    'post': 'PRESIDENT',
    'linkedin': 'https://in.linkedin.com',
    'git': 'https://github.com',
    'insta' :'https://www.instagram.com',
  },
  {
    "id":2,
    'image': '.././src/Images/vicepresident.png',
    'name': 'HELLA',
    'post': 'VICE PRESIDENT',
    'linkedin': 'https://in.linkedin.com',
    'git': 'https://github.com',
    'insta' :'https://www.instagram.com',
  },
  {
    "id":3,
    'image': '.././src/Images/secretary.png',
    'name': 'STEVE',
    'post': 'SECRETARY',
    'linkedin': 'https://in.linkedin.com',
    'git': 'https://github.com',
    'insta' :'https://www.instagram.com',
  },

]




function Team() {
  return (
    <div>
       <div name='team' className='flex justify-center py-20'>
      <div className='flex justify-center items-center w-[400px] h-[60px] rounded-full bg-black'>
        <h1 className='font-bold text-4xl tracking-wide text-white'>TEAM</h1>
      </div>
      </div >
      <div className='flex justify-center'>

        {teams.map((team)=>
        <div className='bg-[#DABDFF] w-[400px] h-[550px] rounded-[50%] border-2 border-purple-500 shadow-xl  -ml-10 '>
        <div className='border-2 border-purple-800 bg-purple-400  w-[250px] h-[250px] rounded-full ml-[73px] mt-3'>
          <img className='transition-all duration-300   hover:grayscale-0 rounded-[50%] grayscale   mt-8' src={team.image} alt="" />
        </div>
        <h1 className='text-center font-bold text-3xl pt-5'>{team.name}</h1>
        <h1 className='text-center font-bold text-xl pt-3'>{team.post}</h1>
        <div className='flex justify-center gap-5 pt-10'>
          <a href={team.linkedin} target='blank'><img  className='w-[50px]' src="https://cdn-icons-png.freepik.com/512/1384/1384014.png?ga=GA1.1.1235215610.1709790793" alt="" /></a>
          <a href={team.git} target='blank'><img  className='w-[50px]' src="https://cdn-icons-png.freepik.com/512/733/733609.png?ga=GA1.1.1235215610.1709790793" alt="" /></a>
          <a href={team.insta} target='blank'><img  className='w-[50px]' src="https://cdn-icons-png.freepik.com/512/1384/1384015.png?ga=GA1.1.1235215610.1709790793" alt="" /></a>
          
        </div>
      </div>
      ) }
      
     
      </div>
    </div>

  )
}

export default Team