import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-light '>
        <div className='w-25 bg-light border p-3 mb-3 '>
         <p>New user?</p>
            {/* <div> */}
            <Link to='/signup' className='mb-3 btn btn-primary w-100 rounded-0'>SignUp</Link>
            <br />
            <p>Already have an account</p>
            {/* </div> */}
            <Link to='/login' className='mb-3 btn btn-success'>Login</Link>
         
        </div>
    </div>
  )
}

export default Home