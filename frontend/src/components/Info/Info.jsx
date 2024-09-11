import React from 'react'
import {intro} from '../../constants'
import carImage from '../../assets/car01.png'
const Info = () => {
  return (
    <section className='p-5 dark:bg-slate-700 md:p-16'>
        <div className='mx-auto flex max-w-6xl flex-col items-center gap-10 rounded-md bg-slate-300 p-5 dark:bg-slate-800 sm:flex-row'>
            <div className='flex flex-1 flex-col gap-5'>
                <h1 className='text-2x-l font-bold dark:text-slate-300 sm:text-3xl'>{intro.title}</h1>
                <p className='dark:text-slate-400'>{intro.description}</p>
            </div>
            <img src={carImage} alt="car image" className='w-60 md:flex-1'/>
        </div>
    </section>
  )
}

export default Info
