import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddService = () => {
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: ''
    })

    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const add = async()=>{
        try{
            const { data } = await axios.post('http://localhost:3200/service/addAdditional', form)
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
                            <h1 className="text-white mb-4">Add Service</h1>
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
                                            <h6 className="mb-0">Price</h6>
                                            <input onChange={handleChange} name='price' type="text" className="form-control form-control-lg" />
                                        </div>
                                    </div>                                    
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Descripton</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <textarea onChange={handleChange} name='description' className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/crud/services'}>
                                                    <button onClick={(e)=> add(e)} type="submit" className="btn btn-primary btn-lg">Add</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link to={'/crud/services'}>
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
