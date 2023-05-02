import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const AddLease = () => {
    const [cellars, setCellars] = useState([{}])
    const [clients, setClients] = useState([{}])

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
            const { data } = await axios.get('http://localhost:3200/client/get')
            setClients(data.client)
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
            console.log(e);
        }
    }

    /* useEffect = (() => getCellars, getClient, []) */
    return (
        <>
            <section className='vh-100'>
                <div className="container h-100">
                    <div className='row d-flex justify-content-center h-100'>
                        <div className='col-xl-9'>
                            <h1 className='mb-4'>Cellar Lease</h1>
                            <div className='card'>
                                <div className='card-body'>
                                    <form action="#" method="post">
                                        <div className="form-group">
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
                                        <div className="form-group">
                                            <label htmlFor="inputClient">Client:</label>
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
                                        <div className="form-group">
                                            <label htmlFor="inputServices">Additional services:</label>
                                            <select className="form-control" id="inputServices" required>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="amount">Amount:</label>
                                            <input type="number" className="form-control" id="amount" name="amount" required />
                                        </div>
                                        <br />
                                        <center>
                                            <button onClick={() => addLease()} type="submit" className="btn btn-success btn-lg">Lease</button>
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
