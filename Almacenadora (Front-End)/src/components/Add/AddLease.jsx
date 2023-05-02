import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const AddLease = () => {
    const [cellars, setCellars] = useState([{}])
    const [clients, setClients] = useState([{}])
    const [services, setServices] = useState([{}])

    const getCellars = async () => {
        try {
            const { data } = await axios('http://localhost:3200/cellar/getCellars');
            setCellars(data.cellars)
        } catch (e) {
            console.log(e);
        }
    }

    const getClient = async () => {
        try {
            const { data } = await axios('http://localhost:3200/client/get')
            setClients(data.client)
        } catch (e) {
            console.log(e);
        }
    }

    const getServices = async () => {
        try {
            const { data } = await axios('http://localhost:3200/service/getAdditional')
            setServices(data.additional)
        } catch (e) {
            console.log(e);
        }
    }

    const addLease = async () => {
        try {
            let lease = {
                cellar: document.getElementById('inputCellar').value,
                client: document.getElementById('inputClient').value,
                services: document.getElementById('inputServices').value,
                amount: document.getElementById('inputAmount').value
            }
            const { data } = await axios.post('http://localhost:3200/lease/add', lease);
            alert(data.message);
        } catch (e) {
            alert(err.response.data.message)
        }
    }

    useEffect(() => getCellars, [])
    useEffect(() => getClient, [])
    useEffect(() => getServices, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#1abc9c" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>Add Lease</h1>
                    </div>
                </div>
            </nav>
            <br />
            <section className='vh-100'>
                <div className="container h-100">
                    <div className='row d-flex justify-content-center h-100'>
                        <div className='col-xl-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <form action="#">
                                        <div className="row">
                                            <div className=" col form-group">
                                                <label htmlFor="inputCellar" className='form-label'>Cellar:</label>
                                                <select className="form-control" id="inputCellar" required>
                                                    {
                                                        cellars.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputClient" className='form-label'>Client:</label>
                                                <select className="form-control" id="inputClient" required>
                                                    {
                                                        clients.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label htmlFor="inputServices">Additional services:</label>
                                                <select className="form-control" id="inputServices" required>
                                                    {
                                                        services.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputAmount">Amount:</label>
                                                <input type="number" className="form-control" id="inputAmount" name="amount" required />
                                            </div>
                                        </div>
                                        <br />
                                        <center>
                                            <Link to={'/crud/lease'}>
                                                <button onClick={() => addLease()} type="submit" className="btn btn-success btn-lg">Lease</button>
                                            </Link>
                                            <Link to={'/crud/lease'}>
                                                <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                            </Link>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
