import React from 'react'
import { Carousel } from '../../components/HomeCarosal/HomeCarosal'
import HomeCard from '../../components/HomeSectionCard/HomeCard'
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal'
import { KurtaMens } from '../../../data/MensKurta'

const Homepage = () => {
  return (
    <>
<Carousel className="-z-50" />
<div className='flex flex-col justify-center px-10 space-y-10' >
    <HomeSectionCarosal data={KurtaMens} secName="Mens Kurta"/>
    <HomeSectionCarosal data={KurtaMens} secName="Womens Kurta"/>
    <HomeSectionCarosal data={KurtaMens} secName="Shoes"/>
    <HomeSectionCarosal data={KurtaMens} secName="Top Offers"/>
    <HomeSectionCarosal data={KurtaMens} secName="Trendings"/>
   
   
</div>
    </>
  )
}

export default Homepage