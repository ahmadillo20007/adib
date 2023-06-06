import React from 'react'
import './Settings.scss'
import set from '../../img/sett.png'
import set2 from '../../img/sett2.png'
import set3 from '../../img/sett3.png'
import set4 from '../../img/sett4.png'
import out from '../../img/out.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Settings() {
  return (
<>
        <Header/>
<div className='container'>
<div className="wrapper">
<div className="menu">
<p>
ACCOUNT DASHBOARD
</p>
<ul className='menu__list'>

    <li> <img src={set} alt="" /> <p>Account Information</p></li>
    <li> <img src={set2} alt="" /> <p>Address Book</p></li>
    <li> <img src={set3} alt="" /><p> My Orders</p></li>
    <li> <img src={set4} alt="" /> <p>My Favorites</p></li>
    <li><img src={out} alt="" /></li>

</ul>
</div>
<div className="item">
    
</div>
</div>
    </div>
<Footer/>
</>
  )
}

export default Settings