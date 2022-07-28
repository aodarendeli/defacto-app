import react from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Detail() {
  const {state} = useLocation()
  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 text-center'>
        <div className="card height-fix">
          <img className="card-img-top" src={state.image} />
          <div className="card-img-overlay">
            <h4 className="card-title"><strong>{state.category}</strong></h4>
            <p className="card-text">{state.category}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
