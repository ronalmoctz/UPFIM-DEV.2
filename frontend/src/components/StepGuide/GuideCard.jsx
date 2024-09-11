import React from 'react'

const GuideCard = ({step}) => {
  return (
    <div className={`flex flex-col items-center bg-gradient-to-r ${step.bgFrom} ${step.bgTo} transform rounded-xl p-8 shadow-lg transition duration-500 hover:scale-105`}>
      <step.icon className="mb-4 text-4xl text-white"/>
      <h3 className='mb-2 text-2xl font-semibold text-white'>{step.title}</h3>
      <p className='text-gray-200'>{step.description}</p>
    </div>
  )
}

export default GuideCard
