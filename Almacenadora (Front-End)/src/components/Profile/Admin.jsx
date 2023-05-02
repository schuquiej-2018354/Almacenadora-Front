import React from 'react'

export const Admin = ({ name, surname, username, password, phone, role }) => {
    return (
        <>
            <div className="e-profile">
                <div className="row">
                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{name}</h4>
                            <p className="mb-0">{username}</p>
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
                                                <label>{name}</label>
                                                <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John Smith" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>{surname}</label>
                                                <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="johnny.s" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>{phone}</label>
                                                <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John Smith" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label>{role}</label>
                                                <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="johnny.s" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input className="form-control" type="text" placeholder="user@example.com" />
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label>{password}</label>
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
            </div>
        </>
    )
}
