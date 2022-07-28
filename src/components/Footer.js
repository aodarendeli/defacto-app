export default function Footer(){
    return(
        <div className="mt-5 pt-5 pb-5 footer">
           <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xs-12 about-company">
                    <h2>Defacto</h2>
                    <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                    <p><a ><i className="fa fa-facebook-square mr-1 px-2"></i></a><a ><i className="fa fa-linkedin-square"></i></a></p>
                </div>
                <div className="col-lg-3 col-xs-12 links">
                <h4 className="mt-lg-0 mt-sm-3">Linkler</h4>
                    <ul className="m-0 p-0">
                    <li>- <a >Lorem ipsum</a></li>
                    <li>- <a >Nam mauris velit</a></li>
                    <li>- <a >Etiam vitae mauris</a></li>
                    <li>- <a >Fusce scelerisque</a></li>
                    <li>- <a >Sed faucibus</a></li>
                    <li>- <a >Mauris efficitur nulla</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-xs-12 location">
                <h4 className="mt-lg-0 mt-sm-4">Lokasyon</h4>
                <p>Lorem ipsum dolor, consectetur adipiscing</p>
                <p className="mb-0"><i className="fa fa-phone mr-3"></i>+90(212) 522-20-10</p>
                <p><i className="fa fa-envelope-o mr-3 px-2"></i>info@defacto.com</p>
                </div>
            </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="mt-3"><a className="text-white-50 mt-5">© 2022. Ahmet Özgür Darendeli.</a></p>
            </div>
          </div>
        </div>
        </div>
    )
}