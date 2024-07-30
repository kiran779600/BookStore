import React from 'react'
import Navbar from '../components/Navbar';
import Contact from '../components/contact';
import Footer from '../components/Footer';

function Contacts() {
  return (
<>

<div>
        <Navbar />
        {/* min height screen ensures proper screen height */}
        <div className='min-h-screen '>
          <Contact />
        </div>
        <Footer />
      </div>

</>
  )
}

export default Contacts