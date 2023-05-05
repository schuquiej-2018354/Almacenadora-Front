import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/NavBar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { Admin } from '../components/Profile/Admin'

export const ProfilePage = () => {
    const[admin, setAdmin] = useState([{}])
    
    const getAdmin = async ()=>{
        try{
            const { data } = await axios('http://localhost:3200/user/getAdmin')
            setAdmin(data.user)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=> getAdmin, []);

    return (
        <>
            <Navbar />
            <br />
            <br />
            <div className="container">
                <div className="row flex-lg-nowrap">                    
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <div className="e-profile">
                                            <div className="row">
                                                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                                        <p className="mb-0">@johnny.s</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-content pt-3">
                                                <div className="tab-pane active">
                                                    <form className="form" noValidate="">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Full Name</label>
                                                                            <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John Smith" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Username</label>
                                                                            <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="johnny.s" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input className="form-control" type="text" placeholder="user@example.com" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 mb-3">                                                                
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Password</label>
                                                                            <input className="form-control" type="password" placeholder="••••••" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end">
                                                                <button className="btn btn-primary" type="submit">Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}
                                        {
                                            admin.map(({_id, name, surname, username, password, phone, role}, index) =>{
                                                return(
                                                    <div key={index}>
                                                        <Admin
                                                        name={name}
                                                        surname={surname}
                                                        username={username}
                                                        password={password}
                                                        phone={phone}
                                                        role={role}
                                                        ></Admin>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="px-xl-3">
                                            <button className="btn btn-block btn-secondary">
                                                <i className="fa fa-sign-out"></i>
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
