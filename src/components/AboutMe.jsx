import React from 'react'
import Gaming from '../assets/gaming.svg'

function AboutMe() {

  const content = "I am Software Engineer and C# / .NET Developer currently pursuing Engineer's Degree in Computer Science at Lodz University of Technology, a person who loves to code and get known with new technologies, but that's obvious. Beside that I am in love with PlayStation and playing video games. I really enjoy doing Calisthenics. I am also into Cars, mainly Porsche."

  return (
    <div className='w-full flex sm:flex-row flex-col justify-center items-center'>

      <div className='basis-1/2'>
        <img src={ Gaming } className='w-full' />
      </div>

      <div className='lex-auto w-9/12 flex flex-col lg:items-end items-start'>

        <div className='lg:text-7xl text-4xl font-black [text-shadow:_10px_12px_0_rgb(169_133_255_/_100%)] lg:mb-0 mb-3'>
          About me
        </div>

        <div className='lg:w-9/12 lg:text-xl text-base lg:text-right text-left'>
          { content }
        </div>
      </div>
    </div>
  )
}

export default AboutMe