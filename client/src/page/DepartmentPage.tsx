import React from 'react'

function DepartmentPage() {
    return (
        <>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Department</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Department</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Simple Full Width Table</h3>
                                        <div className="card-tools">
                                            <ul className="pagination pagination-sm float-right">
                                                <li className="page-item"><a className="page-link" href="#">«</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 }}>#</th>
                                                    <th>Task</th>
                                                    <th>Progress</th>
                                                    <th style={{ width: 40 }}>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Update software</td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-danger">55%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Clean database</td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-warning" style={{ width: '70%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-warning">70%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Cron job running</td>
                                                    <td>
                                                        <div className="progress progress-xs progress-striped active">
                                                            <div className="progress-bar bg-primary" style={{ width: '30%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-primary">30%</span></td>
                                                </tr>
                                                <tr>
                                                    <td>4.</td>
                                                    <td>Fix and squish bugs</td>
                                                    <td>
                                                        <div className="progress progress-xs progress-striped active">
                                                            <div className="progress-bar bg-success" style={{ width: '90%' }} />
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-success">90%</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>

                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </>
    )
}

export default DepartmentPage