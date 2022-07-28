export default function Navbar() {
  return (
    <div className='container pt-3 py-5'>
      <div className='row'>
        <div className='col'>
          <nav className="navbar navbar-expand-lg ">
           <div className="container-fluid">
            <img src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg" />
              <div className="collapse navbar-collapse px-5">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <a className="nav-link ">Kadınlar</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Erkekler</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Çoçuklar</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Ayakkabılar</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Aksesuarlar</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Pantalonlar</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link" >Elbiseler</a>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  )
}
