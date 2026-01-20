import React from 'react'
import StartForm from '../components/contact/StartFrom'
import LetsKeepItSimple from '../components/contact/LetsKeepItSimple'
import RealTimeAiControl from '../components/home/RealTimeAiControl'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[var(--Gray-Primary)]'>
      <StartForm />
      <LetsKeepItSimple />
      <RealTimeAiControl />
    </div>
  )
}

export default Contact