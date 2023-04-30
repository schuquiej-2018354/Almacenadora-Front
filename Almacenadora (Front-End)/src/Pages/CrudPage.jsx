import React from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'

export const CrudPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <body>
        <div className="container py-3">
          <header>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class="display-4 fw-normal">Options Admin</h1>
              <p class="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
            </div>
          </header>

          <main>
            <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Cellars</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                      <img className='card-img' src="https://www.df.cl/noticias/site/artic/20210125/imag/foto_0000000220210125121821.jpg" alt="Cellars Image" style={{ width: "95%", height: "95%" }} />
                    </ul>
                    <Link to={'/crud'}>
                      <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
                    </Link>
                  </div>
                </div>
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Accounts</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                      <img src="data:image/jpeg;base64,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" alt="" className="card-img" style={{ width: "95%", height: "95%" }} />
                    </ul>
                    <Link to={'/accounts'}>
                      <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Clients</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                      <img src="https://www.questionpro.com/blog/wp-content/uploads/2017/02/0184.jpg" alt="" className="card-img" style={{ width: "95%", height: "95%" }} />
                    </ul>
                    <Link to={'/clients'}>
                      <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
                    </Link>
                  </div>
                </div>
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Services</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                      <img src="https://www.seoptimer.com/es/blog/wp-content/uploads/2015/03/7-servicios-de-marketing-online-que-toda-empresa-necesita-para-triunfar-1200x675.jpg" alt="" className="card-img" style={{ width: "95%", height: "95%" }} />
                    </ul>
                    <Link to={'/services'}>
                      <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </body>
    </>
  )
}
