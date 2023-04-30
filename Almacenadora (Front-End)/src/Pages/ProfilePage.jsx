import React from 'react'

export const ProfilePage = () => {
    return (
        <>
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3" /* style="width: 200px;" */>
                        <div className="card p-3">
                            <div className="e-navlist e-navlist--active-bg">
                                <ul className="nav">
                                    <li className="nav-item"><a className="nav-link px-2 active" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                                            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                                        </svg>
                                        <span>Overview</span>
                                    </a></li>
                                    <li className="nav-item"><a className="nav-link px-2" href="#" target="__blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <span>CRUD</span>
                                    </a></li>
                                    <li className="nav-item"><a className="nav-link px-2" href="#" target="__blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                        </svg>
                                        <span>Settings</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
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
                                                                {/* <div className="mb-2"><b>Change Password</b></div> */}
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
                                        </div>
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
        </>
    )
}
