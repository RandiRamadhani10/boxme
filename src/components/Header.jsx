import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink to="/" className="navbar-brand" >
                        <img src="/assets/icon.png" alt="" width="30" height="30" class="d-inline-block align-text-top"/>
                    </NavLink>
                    <div class="collapse navbar-collapse  justify-content-center" id="navbarNav">
                    <ul class="navbar-nav   ">
                        <li class="nav-item">
                        <NavLink to="/Barang" className="nav-link" activeClassName="nav-link active">Barang</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink to="/pemasukan" className="nav-link" activeClassName="nav-link active">Pemasukan</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink to="/pengeluaran" className="nav-link" activeClassName="nav-link active">Pengeluaran</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink to="/Tentang" className="nav-link" activeClassName="nav-link active">Tentang</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>  
        </>
    );
}


export default Header;