import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hook'
import { fetchPrefix } from '../redux/features/prefix/prefixSlice'

function PrefixPage() {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.prefix)

    useEffect(() => {
        dispatch(fetchPrefix());
    }, []);
    return (
        <>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Prefix</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Prefix</li>
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
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">
                                        <table className="table table-sm">
                                            <thead className="ta">
                                                <tr>
                                                    <th style={{ width: 10 }}>#</th>
                                                    <th style={{ width: 10 }}>#</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    state.status === "loading" ? (
                                                        <tr>
                                                            <td>Loading...</td>
                                                        </tr>
                                                    ) : state.status === "failed" ? (
                                                        <tr>
                                                            <td>Failed</td>
                                                        </tr>
                                                    ) : state.data.data.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.prefix_name}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
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

export default PrefixPage