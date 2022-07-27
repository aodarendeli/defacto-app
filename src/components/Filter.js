import { useState } from "react"
import Data from '../Data.json'
export default function Filter(){
    const [searchProduct, setSearchProduct] = useState("");

    return(
        <div className='container'>
            <input className='search' type="text" placeholder="Search your products..."
            onChange={(e) => setSearchProduct(e.target.value)}
            />
            <div className="card__container">
                {
                    Data.filter((val) => {
                        if(searchProduct === ""){
                            return val
                        }
                        else if(val.category.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase())){
                            return val
                        }
                    })
                    .map((val) => {
                        return (
                        <div className="card" key={val.id} style={{width : "18rem"}}>
                        <img src={val.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{val.category}</h5>
                                <p className="card-text">{val.gender}</p>
                                <p className="card-text">{val.color}</p>
                                <p className="card-text">{val.size}</p>
                                <p className="btn btn-primary">Detaya Git</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}