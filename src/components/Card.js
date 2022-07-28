import {useNavigate} from 'react-router-dom'

export default  ({val}) => {
  const nav = useNavigate()
    return (
      <div className='card'  style={{width: '18rem'}}>
        <img src={val.image} className='card-img-top ' alt='...' />
        <div className='card-body'>
          <span class="badge-box"><i className="fa fa-check"></i></span>
          <div className='row'>
            <div className='col-6'>
              <h4 className='card-title'>{val.category}</h4>
              <button
                onClick={() => nav(`/product/${val.id}`, {state: val})}
                className='btn btn-primary mt-4'
                >
                  Detaya Git
              </button>
            </div>
            
            <div className='col-6'>
              <p className='card-text'>Cinsiyet: {val.gender}</p>
              <p className='card-text'>Renk: {val.color}</p>
              <p className='card-text'>Beden: {val.size}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }