import React, { useEffect, useState } from 'react'
import { TableCellars } from '../components/table/TableCellars';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const CrudPage = () => {
    const [tableCellars, setTableCellars] = useState([{}])

    const getTableCellars = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/cellar/getCellars');
            setTableCellars(data.cellars)
        } catch (e) {
            console.log(e);
        }
    }
    const deleteCellar =async(id)=>{
        try{
            let confirmDelete = confirm("Are you sure you want to delete this hold?")
            if (confirmDelete) {
                const { data } = await axios.delete(`http://localhost:3200/cellar/delete/${id}`)
                console.log(data);
                getTableCellars()
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => getTableCellars, [])

    return (
        <>
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col">
                        <div className="e-tabs mb-3 px-3">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">Users</li>
                            </ul>
                        </div>
                        <div className="row flex-lg-nowrap">
                            <div className="col mb-3">
                                <div className="e-panel card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6 className="mr-2"><span>Users</span><small className="px-1">Be a wise leader</small></h6>
                                        </div>
                                        <div>
                                            <div className="e-table">
                                                <div className="table-responsive table-lg mt-3">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Photo</th>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                                <th> Location</th>
                                                                <th>Size</th>
                                                                <th>Availability</th>
                                                                <th>Price</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                tableCellars.map(({ _id, photo, name, description, location, size, availability, price }, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <TableCellars
                                                                                photo={photo}
                                                                                name={name}
                                                                                description={description}
                                                                                location={location}
                                                                                size={size}
                                                                                availability={availability}
                                                                                price={price}
                                                                            ></TableCellars>
                                                                            <td className="text-center align-middle">
                                                                                <div className="btn-group align-top">
                                                                                    <Link to={'/update'}>
                                                                                    <button className="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                                                                                    </Link>
                                                                                    <button onClick={() => deleteCellar(_id)} className="btn btn-sm btn-outline-secondary badge" type="button">
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

                            <div className="col-12 col-lg-3 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-center px-xl-3">
                                            <Link to={'/addCellar'}>
                                                <button className="btn btn-success btn-block" type="button" data-toggle="modal" data-target="#user-form-modal">New User</button>
                                            </Link>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="e-navlist e-navlist--active-bold">
                                            <ul className="nav">
                                                <li className="nav-item active"><a href="" className="nav-link"><span>All</span>&nbsp;<small>/&nbsp;32</small></a></li>
                                                <li className="nav-item"><a href="" className="nav-link"><span>Active</span>&nbsp;<small>/&nbsp;16</small></a></li>
                                                <li className="nav-item"><a href="" className="nav-link"><span>Selected</span>&nbsp;<small>/&nbsp;0</small></a></li>
                                            </ul>
                                        </div>
                                        <hr className="my-3" />
                                        <div>
                                            <div className="form-group">
                                                <label>Date from - to:</label>
                                                <div>
                                                    <input id="dates-range" className="form-control flatpickr-input" placeholder="01 Dec 17 - 27 Jan 18" type="text" readOnly="readonly" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Search by Name:</label>
                                                <div><input className="form-control w-100" type="text" placeholder="Name" defaultValue="" /></div>
                                            </div>
                                        </div>
                                        <hr className="my-3" />
                                        <div className="">
                                            <label>Status:</label>
                                            <div className="px-2">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" name="user-status" id="users-status-disabled" />
                                                    <label className="custom-control-label" htmlFor="users-status-disabled">Disabled</label>
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" name="user-status" id="users-status-active" />
                                                    <label className="custom-control-label" htmlFor="users-status-active">Active</label>
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" name="user-status" id="users-status-any" defaultChecked="" />
                                                    <label className="custom-control-label" htmlFor="users-status-any">Any</label>
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
