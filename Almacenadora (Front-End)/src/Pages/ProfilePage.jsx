import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer/Footer'
import { Admin } from '../components/Profile/Admin'
import axios from 'axios'
import { NavBarAdmin } from '../components/NavBarAdmin/NavBarAdmin'

export const ProfilePage = () => {
    const[admin, setAdmin] = useState([{}])    
    
    const getAdmin = async ()=>{
        try{
            const { data } = await axios('http://localhost:3200/user/getUsers')
            setAdmin(data.user)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=> getAdmin, []);

    return (
        <>
            <NavBarAdmin />
            <br />
            <br />
            <div className="container">
                <div className="row flex-lg-nowrap">                    
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card">
                                    <div className="card-body">                                        
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
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
