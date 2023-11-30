import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Categories.css'
import img1 from '../components/asssets/images/ca1.jpg';
import img2 from '../components/asssets/images/ca2.jpg';
import img3 from '../components/asssets/images/ca3.jpg';

const Category = () => {

 // const [About, setAbout] = useState("About");

  return (
    <div className='OptionsList'>
    <ul>
      <div className='veg'>
      <Link to='/Veg'>
      <img src={img1} alt="Image" />
      </Link>
      <li>VEG</li>
      </div>
      <div className='nonveg'>
      <Link to='/Nonveg'>
      <img src={img2} alt="Image" />
      </Link>
      <li>NON-VEG</li>
      </div>
      <div className='healthfreak'>
      <Link to='/HealthFreak'>
      <img src={img3} alt="Image" />
      </Link>
      <li>HEALTH-FREAK</li>
      </div>
    </ul>
  </div>
  )
}

export default Category
