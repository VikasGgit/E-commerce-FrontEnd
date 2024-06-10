import React from 'react'
import { Carousel } from '../../components/HomeCarosal/HomeCarosal'
import HomeCard from '../../components/HomeSectionCard/HomeCard'
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal'

const Homepage = () => {
  return (
    <>
<Carousel/>
<div className='flex flex-col justify-center px-10 space-y-10' >
    <HomeSectionCarosal/>
    <HomeSectionCarosal/>
    <HomeSectionCarosal/>
    <HomeSectionCarosal/>
    <HomeSectionCarosal/>
</div>
    </>
  )
}

export default Homepage