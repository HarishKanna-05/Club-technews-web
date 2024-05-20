import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Events from '../Components/Events'
import Team from '../Components/Team'
import Footer from '../Components/Footer'
// import News from '../Components/News'
import NewsApp from '../Components/NewsApp'

function Home() {
  return (
    <div>
        <Header/>
        <Intro/>
        <NewsApp/>
        {/* <News/> */}
        <Events/>
        <Team/>
        {/* <Contact/> */}
        <Footer/>
       
    </div>
  )
}

export default Home