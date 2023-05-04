import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const UpdateCellar = () => {
    
    const [tableCellar, setTableCellar] = useState([{}])
    const { id } = useParams();

    const getTableCellar = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/cellar/getById/${id}`);
            setTableCellar(data.cellar)
        } catch (e) {
            console.log(e);
        }
    }

    const updateCellar = async () => {
        try {
            let updatedCellar = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                location: document.getElementById('inputLocation').value,
                size: document.getElementById('inputSize').value,
                availability: document.getElementById('inputAvailability').value,
                price: document.getElementById('inputPrice').value
            }
            const { data } = await axios.put(`http://localhost:3200/cellar/update/${id}`, updatedCellar)
            /* console.log(`${data.message} ${data.updatedCellar.name}`); */
        } catch (e) {
            console.error(e);
            
        }
    }

    useEffect(() => getTableCellar, [])
    return (
        <>
            <section className="vh-100" /* style="background-color: #2779e2;" */>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Update Cellar</h1>
                            <div className="card" /* style="border-radius: 15px;" */>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <label htmlFor='inputName' className="mb-0" >Name</label>
                                            <input defaultValue={tableCellar.name} name='name' type="text" className="form-control form-control-lg" id='inputName' required />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <label htmlFor='inputSize' className="mb-0" >Size</label>
                                            <input defaultValue={tableCellar.size} name='size' type="text" className="form-control form-control-lg" id='inputSize' required />
                                        </div>
                                        <div className="col pe-5">
                                            <label htmlFor='inputPrice' className="mb-0" >Price</label>
                                            <input defaultValue={tableCellar.price} name='price' type="text" className="form-control form-control-lg" id='inputPrice' required />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <label htmlFor='inputLocation' className="mb-0" >Location</label>
                                            <input defaultValue={tableCellar.location} name='location' type="text" className="form-control form-control-lg" id='inputLocation' required />
                                        </div>
                                        <div className="col pe-5">
                                            <label htmlFor='inputAvailability' className="mb-0" >Availability</label>
                                            <input defaultValue={tableCellar.availability} name='availability' type="text" className="form-control form-control-lg" id='inputAvailability' required />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <label htmlFor='inputDescription' className="mb-0" >Descripton</label>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <textarea defaultValue={tableCellar.description} name='description' className="form-control" rows="3" placeholder="Message sent to the employer" id='inputDescription' required></textarea>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Photo</h6>
                                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                            <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file
                                                size 50 MB</div>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                                <div className="col">
                                                    <Link to={'/crud/cellars'}>
                                                        <button onClick={() => updateCellar()} type="submit" className="btn btn-primary btn-lg">Update</button>
                                                    </Link>
                                                </div>
                                            <div className="col">
                                                <Link to={'/crud/cellars'}>
                                                    <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
