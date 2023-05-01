import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddClient = () => {

    const [form, setForm] = useState({
        name: '',
        surname: '',
        identification: '',
        residency: ''
    })

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const add = async(e)=>{
        try{
            /* e.preventDefault() */
            const { data } = await axios.post('http://localhost:3200/client/add', form)
            alert(data.message)
            console.log('Added');
        }catch(e){
            console.log(e);
        }
    }

    return (
        <>
            <section className="vh-100" /* style="background-color: #2779e2;" */>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Add User</h1>
                            <div className="card" /* style="border-radius: 15px;" */>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Name</h6>
                                            <input onChange={handleChange} name='name' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Surname</h6>
                                            <input onChange={handleChange} name='surname' type="text" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Identification</h6>
                                            <input onChange={handleChange} name='identification' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Residency</h6>
                                            <input onChange={handleChange} name='residency' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>                                                                      
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/clients'}>
                                                    <button onClick={(e) => add(e)} type="submit" className="btn btn-primary btn-lg">Add Client</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/clients'}>
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
