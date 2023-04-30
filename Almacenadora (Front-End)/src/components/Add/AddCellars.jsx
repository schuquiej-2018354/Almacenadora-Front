import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const ModalCellars = () => {

    const [image, setImage] = useState('')

    const [form, setForm] = useState({
        name: '',
        description: '',
        location: '',
        size: '',
        availability: '',
        price: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const register = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/cellar/add', form)
            alert(data.message)
            console.log('Added');
        } catch (e) {
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
                                    <form>
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col-md- pe-5">
                                                <h6 className="mb-0">Name</h6>
                                                <input onChange={handleChange} name='name' type="text" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col pe-5">
                                                <h6 className="mb-0">Size</h6>
                                                <input onChange={handleChange} name='size' type="text" className="form-control form-control-lg" />
                                            </div>
                                            <div className="col pe-5">
                                                <h6 className="mb-0">Price</h6>
                                                <input onChange={handleChange} name='price' type="text" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div className="row align-items-center pt-4 pb-3">
                                            <div className="col pe-5">
                                                <h6 className="mb-0">Location</h6>
                                                <input onChange={handleChange} name='location' type="text" className="form-control form-control-lg" />
                                            </div>
                                            <div className="col pe-5">
                                                <h6 className="mb-0">Availability</h6>
                                                <input onChange={handleChange} name='availability' type="text" className="form-control form-control-lg" />
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
                                        <div className="row align-items-center py-3">
                                            <div className="col-md- pe-5">
                                                <h6 className="mb-0">Photo</h6>
                                                <input name='photo' className="form-control form-control-lg" id="formFileLg" type="file" />
                                                <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
                                            </div>
                                        </div>
                                        <hr className="mx-n3" />
                                        <div className="px-5 py-4">
                                            <div className="row">
                                                <div className="col">
                                                    <button onClick={(e) => register(e)} type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                                <div className="col">
                                                    <Link to={'/crud'}>
                                                        <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <script src="js/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
        </>
    )
}