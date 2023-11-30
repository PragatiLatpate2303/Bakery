import React from 'react'
import './Home.css'

import img from '../components/asssets/images/prpl.jpg';

const imageFilenames = ['c3.jpeg','c4.jpeg','c5.jpeg','cake1.jpeg',
'cake2.jpeg','cake3.jpeg'];

const Home = () => {
  return (
  <div className='HomeBG'>
    <div className='BCimg'>
    <img src={img} alt='img1'/>
    </div>
    <div className='Headline1'>
    <h1>Welcome<br/>To<br/>Sweet Baker's.</h1>
    </div>
    <div className='Headline2'>
    <h1>Unique<br/>Creation<br/>For<br/>Unique<br/>Ocassions.</h1>
    </div>
  </div>
  )
}

export default Home
