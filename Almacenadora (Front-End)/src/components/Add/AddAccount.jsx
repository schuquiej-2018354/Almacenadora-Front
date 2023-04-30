import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddAccount = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        phone: ''
        /* role: '' */
    })

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const register = async(e)=>{
        try{
            /* e.preventDefault() */
            const { data } = await axios.post('http://localhost:3200/account/addAccount', form)
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
                            <h1 className="text-white mb-4">Add Cellar</h1>
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
                                            <h6 className="mb-0">Username</h6>
                                            <input onChange={handleChange} name='username' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Email</h6>
                                            <input onChange={handleChange} name='email' type="email" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col pe-5">
                                            <h6 className="mb-0">Phone</h6>
                                            <input onChange={handleChange} name='phone' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Password</h6>
                                            <input onChange={handleChange} name='password' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>
                                    {/* <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md- pe-5">
                                            <h6 className="mb-0">Role</h6>
                                            <input onChange={handleChange} name='role' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>  */}                                   
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <button onClick={(e)=> register(e)} type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                            <div className="col">
                                                <Link to={'/accounts'}>
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
