import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section className="topBarSection">
        <div className='companyTitle'>
          <Link to={'/'} className='link'><h2>SUBY</h2></Link>
           
        </div>
        <div className='searchBar'>
            <input type="text" placeholder='search..'/>
        </div>
        <div className='userAuth'>
            Login / Signup
        </div>
      </section>
    </div>
  )
}

export default Navbar
