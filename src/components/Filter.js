import {useState, useEffect} from 'react'
import Data from '../Data.json'
import  Card from './Card'

export default function Filter() {
  const [searchProduct, setSearchProduct] = useState('')
  const [items, setItems] = useState(Data)
  const [base, setBase] = useState(Data)
  const [genderFilter, setGenderFilter] = useState(null)
  const [colorFilter, setColorFilter] = useState(null)

  useEffect(() => {
    let arr = [...base]
    let filteredArr = []

    arr.map((item) => {
      if (
        (!genderFilter || item.gender === genderFilter) &&
        (!colorFilter || item.color === colorFilter)
      )
        filteredArr = [...filteredArr, item]
    })
    filteredArr && setItems(filteredArr)
  }, [searchProduct, genderFilter, colorFilter])

  return (
    <div className='container'>
      <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <input
            className='search mt-3'
            type='text'
            placeholder='Search your products...'
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <h5 className='pt-4 mt-2'>Cinsiyetenize Göre</h5>
            <div className="form-check">
              <input  onClick={() => setGenderFilter('Erkek')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label">
                Erkek
              </label>
            </div>
            <div className="form-check">
              <input onClick={() => setGenderFilter('Kadın')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" >
                Kadın
              </label>
            </div>
          </div>
          
          <div className='col-lg-6  col-md-6 col-sm-12'>
            <h5 className='mt-3'>Renk Seçenekleri</h5>
              <div className='row'>
                <div className='col-4'>
                <p className='clickable d-flex align-items-center' onClick={() => setColorFilter('Gri')}><div className='grey mx-1'></div>Gri</p>
              <p className='clickable d-flex align-items-center'onClick={() => setColorFilter('Siyah')}><div className='black mx-1'></div>Siyah</p>
                </div>
                <div className='col-4'>
                  <p className='clickable d-flex align-items-center'onClick={() => setColorFilter('Mavi')}><div className='blue mx-1'></div>Mavi</p>
                  <p className='clickable d-flex align-items-center'onClick={() => setColorFilter('Yeşil')}><div className='green mx-1'></div>Yeşil</p>
                </div>
                <div className='col-4'>
                  <p className='clickable d-flex align-items-center'onClick={() => setColorFilter('Beyaz')}><div className='white mx-1'></div>Beyaz</p>
                  <p className='clickable d-flex align-items-center'onClick={() => setColorFilter('Pembe')}><div className='pink mx-1'></div>Pembe</p>
                </div>
              </div>
           </div>
            <div className='row  pt-4'>
              <div className='col-lg-4 col-sm-12 search-button'>
                <button className='clickable clean-button'
                onClick={(event) => {
                  setColorFilter(null)
                  setGenderFilter(null)
                }}
                >
                Arama Filtrelerini Temizle
              </button>
              </div>
            </div>
       

      <div className='card__container pt-5'>
        {items
          .filter((val) => {
            if (searchProduct === '') {
              return val
            } else if (
              val.category
                .toLocaleLowerCase()
                .includes(searchProduct.toLocaleLowerCase())
            ) {
              return val
            }
          })
          .map((val) => {
            return <Card key={val.id} val={val} />
          })}
          
        </div>
      </div>
     </div>
  )
}