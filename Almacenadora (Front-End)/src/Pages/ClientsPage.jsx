import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TableClients } from '../components/table/TableClients'

export const ClientsPage = () => {
    const [tableClients, setTableClients] = useState([{}])

    const getTableClients = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/client/get')
            setTableClients(data.client)
        } catch (e) {
            console.log(e);
        }
    }

    const deletClient = async (id) =>{
        try{
            let confirmDelete = confirm("Are you sure you want to delete this hold?")
            if(confirmDelete){
                const { data } = await axios.delete(`http://localhost:3200/client/delete/${id}`)
                console.log(data);
                getTableClients()
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => getTableClients, [])
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
                                    <Link to={'/cellar'} className="nav-link active">
                                        Cellars
                                    </Link>
                                </li>
                                <li className="nav-item"><a className="nav-link active bg-info">Clients</a></li>
                                <li className="nav-item">
                                    <Link to={'/accounts'} className="nav-link active">
                                        Accounts
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/services'} className="nav-link active">
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="row flex-lg-nowrap">
                            <div className="col mb-3">
                                <div className="e-panel card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6 className="mr-2"><span>Clients</span></h6>
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
                                                <Link to={'/addClient'}>
                                                    <button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">New Client</button>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="e-table">
                                                    <div className="table-responsive table-lg mt-3">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Surname</th>
                                                                    <th>identification</th>
                                                                    <th>Residency</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    tableClients.map(({ _id, name, surname, identification, residency }, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <TableClients
                                                                                    name={name}
                                                                                    surname={surname}
                                                                                    identification={identification}
                                                                                    residency={residency}
                                                                                ></TableClients>
                                                                                <td className="text-center align-middle">
                                                                                    <div className="btn-group align-top">
                                                                                        <Link to={`/updateC/${_id}`} className="btn btn-sm btn-primary btn-outline-secondary badge">
                                                                                            <button className="btn badge" type="button" data-toggle="modal" data-target="#user-form-modal">
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                                </svg>
                                                                                            </button>
                                                                                        </Link>
                                                                                        <button onClick={() => deletClient(_id)} className="btn btn-sm btn-danger btn-outline-secondary badge" type="button">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                                            </svg>
                                                                                        </button>
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
            </div>
        </>
    )
}
