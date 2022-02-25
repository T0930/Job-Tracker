import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Active from '../pages/Active'
import Rejections from '../pages/Rejections'
import Inactive from '../pages/Inactive'
import Interviews from '../pages/Interviews'
import Home from '../pages/Home'
import Login from '../pages/Login'


function NavBar({ currentPage, handlePageChange }) {
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Active') {
            return <Active />;
        }
        if (currentPage === 'Rejections') {
            return <Rejections />;
        }
        if (currentPage === 'Inactive') {
            return <Inactive />;

        } if (currentPage === 'Login') {
            return <Login />;
        }
        return <Interviews />;

    };

    return (
        <><div className="bg-dark text-secondary px-1 py-2 text-start">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">My Applications</h1>
            </div>
        </div><div className="row">
                <div className="col-2">
                    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                        <CDBSidebar textColor="#fff" backgroundColor="#333">
                            <CDBSidebarHeader>
                                <a href="#Home" className="text-decoration-none" style={{ color: 'inherit' }} onClick={() => handlePageChange('Home')}>
                                    Home
                                </a>
                            </CDBSidebarHeader>
                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="#active"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => handlePageChange('Active')}
                                            className={currentPage === 'Active' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            All Active Applications
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="#rejections"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => handlePageChange('Rejections')}
                                            className={currentPage === 'Rejections' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Rejections
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="#inactive"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => handlePageChange('Inactive')}
                                            className={currentPage === 'Inactive' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Inactive
                                        </a>
                                    </li>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <a
                                            href="#interviews"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => handlePageChange('Interviews')}
                                            className={currentPage === 'Interviews' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Interviews
                                        </a>
                                    </li>




                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        padding: '20px 5px',
                                    }}
                                >
                                    
                                    <a
                                            href="#Logout"
                                            className="text-decoration-none" style={{ color: 'inherit' }}
                                            onClick={() => handlePageChange('Logout')}
                                            className={currentPage === 'Logout' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                                            Logout
                                        </a>
                                </div>
                            </CDBSidebarFooter>
                        </CDBSidebar>
                    </div>
                </div>
                <div className="col-9">
                    <div id="content align-self-end">

                        {renderPage()}

                    </div>

                </div>

            </div></>



    );
}

export default NavBar;


