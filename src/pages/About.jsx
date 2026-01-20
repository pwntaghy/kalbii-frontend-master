import React from 'react'
import Fastpage from '../components/about/Fastpage'
import Aboutsecond from '../components/about/Aboutsecond'
import TheTeamSection from '../components/about/TheTeamSection'
import WhyWeBelieve from '../components/about/WhyWeBelieve'
import NewsBlogs from '../components/home/NewsBlogs'
import Newsletter from '../components/home/Newsletter'
import FAQ from '../components/home/FAQ'

const About = () => {
  return (
    <div className='min-h-screen bg-[var(--Gray-Primary)]'>
      <Fastpage />
      <Aboutsecond />
      <TheTeamSection />
      <WhyWeBelieve />
      <NewsBlogs />
      <Newsletter />
      <FAQ />
    </div>
  )
}

export default About