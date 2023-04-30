import React from 'react'
import { Navbar } from '../components/NavBar/Navbar'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import cellarImg from '../Assents/Cellar.jpg'
import clientImg from '../Assents/Client.jpg'
import serviceImg from '../Assents/Service.jpg'
import accountImg from '../Assents/Account.jpeg'

export const CrudPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar></Navbar>
      <br />
      <div className="container py-3">
      <Outlet></Outlet>
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Options Admin</h1>
            <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
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
                    <img src={cellarImg} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                  </ul>
                  <Link to='cellars'>
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
                    <img src={accountImg} alt="Accounts Image" className="card-img" style={{ width: "95%", height: "95%" }} />
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
                    <img src={clientImg} alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
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
                    <img src={serviceImg} alt="Services Image" className="card-img" style={{ width: "95%", height: "95%" }} />
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
      <Footer></Footer>
    </>
  )
}
