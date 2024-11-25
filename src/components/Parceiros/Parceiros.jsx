import React from 'react';
import './Parceiros.scss';

import inf from '../../assets/images/if.png'
import unicamp from '../../assets/images/unicamp.png'
import usp from '../../assets/images/usp.png'
import unesp from '../../assets/images/unesp.png'
import enem from '../../assets/images/enem.png'
import cotuca from '../../assets/images/cotuca.png'
import etec from '../../assets/images/etec.jpg'
import cotil from '../../assets/images/cotil.png'

function Parceiros() {
  return (
    <div className='parceiros-container'>

      <img src={inf} alt="inf" />
      <img src={unicamp} alt="unicamp" />
      <img src={usp} alt="usp" />
      <img src={unesp} alt="unesp" />
      <img src={enem} alt="enem" />
      <img src={cotuca} alt="cotuca" />
      <img src={etec} alt="" />
      <img src={cotil} alt="" />

    </div>
  )
}

export default Parceiros