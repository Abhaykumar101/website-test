import React from 'react'
import Header from '../Header/navbar'
import Herosection from '../Herosection/herosection'
import Sectionone from '@/component/section1/sec1'
import Sectionsecond from '@/component/section2/sec2'
import Sectionthird from '@/component/section3/sec3'
import Sectionfourth from '@/component/section4/sec3'
import Sectionfifth from '@/component/section5/sec5'
import Sectionsixth from '@/component/section6/sec6'
import Sectionseven from '@/component/section7/sec7'
import Sectioneight from '@/component/section8/sec8'
import Footer from '@/component/footer/Footer'

function Homepage() {
  return (
    <div>
      <Header />
      <Herosection />
      <Sectionone />
      <Sectionsecond />
      <Sectionthird />
      <Sectionfourth />
      <Sectionfifth />
      <Sectionsixth />
      <Sectionseven />
      <Sectioneight />
      <Footer />
    </div>
  )
}

export default Homepage