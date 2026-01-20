import React from 'react'
import RealTimeAiControl from '../components/home/RealTimeAiControl'
import WeareHiring from '../components/Career/WeareHiring'
import HiringProcess from '../components/Career/HiringProcess'
import Newsletter from '../components/home/Newsletter'

const Career = () => {
  return (
    <div className='min-h-screen bg-[var(--Gray-Primary)]'>
      <WeareHiring />
      <HiringProcess />
      <Newsletter />
      <RealTimeAiControl />
    </div>
  )
}

export default Career