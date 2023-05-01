import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/NavBar/Navbar'
import { Link} from 'react-router-dom'
import axios from 'axios'
import { TableServices } from '../components/table/TableServices'


export const ServicesPage = () => {
    const [tableServices, setTableServices] = useState([{}])

    const getTableServices = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/service/getAdditional');
            setTableServices(data.additional)
            console.log(data.additional);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => getTableServices, [])
    return (
        <>
            <Navbar></Navbar>
            <br />
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col">
                        <div className="e-tabs mb-3 px-3">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to={'/crud/cellars'} className="nav-link active">
                                        Cellars
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/crud/clients'} className="nav-link active">
                                        Clients
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/crud/accounts'} className="nav-link active">
                                        Accounts
                                    </Link>
                                </li>
                                <li className="nav-item"><a className="nav-link active bg-info">Services</a></li>
                            </ul>
                        </div>
                        <div className="row flex-lg-nowrap">
                            <div className="col mb-3">
                                <div className="e-panel card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6 className="mr-2"><span>Services</span><small className="px-1">Be a wise leader</small></h6>
                                        </div>
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col-md-4 form-floating mb-3">
                                                <input id='inputSearch' className="form-control" type="text" placeholder="Name" defaultValue="" />
                                                <label htmlFor='inputSearch'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                    Search
                                                </label>
                                            </div>
                                            <div className="col-md-2 offset-md-6">
                                                <Link to={'add'}>
                                                    <button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">New Services</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Price</th>
                                                                <th>Description</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                tableServices.map(({ _id, name, price, description }, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <TableServices
                                                                                name={name}
                                                                                price={price}
                                                                                description={description}
                                                                            ></TableServices>
                                                                            <td className="text-center align-middle">
                                                                                <div className="btn-group align-top">
                                                                                    <Link to={`update/${_id}`} className="btn btn-sm btn-primary btn-outline-secondary badge">
                                                                                        <button className="btn badge" type="button" data-toggle="modal" data-target="#user-form-modal">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
