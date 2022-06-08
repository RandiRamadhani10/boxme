import React, { useState } from 'react';
import dataPengeluaran from '../models/data/dataPengeluaran';
import CreatePengeluaran from '../views/pengeluaran/createPengeluaran';
import ViewsPengeluaran from '../views/pengeluaran/viewsPengeluaran';
import loadDataFromLocal from '../models/data/loadDataFromLocal';
const Pengeluaran = () => {
    let [ getData, setData ] = useState({
        reload:false
    });
    loadDataFromLocal(dataPengeluaran,"dataLocalPengeluaran");
    function render(){ 
        setData({
            reload:true,
    })
   } 
        return (
        <>
            <div className="container md-6 mt-4">
                <div className="card">
                    <div class="card-header bg-warning text-light">
                        Manajemen Pengeluaran Barang
                    </div>
                    
                        <div className="card-body">
                            <div className="row">

                                <div className="col-md-4 col-sm">
                                    <CreatePengeluaran  renderData = { render }/>
                                </div>
                                <div className="col-md mt-4 col-sm">
                                    <div className="card table-responsive">
                                        <ViewsPengeluaran  renderData = { render }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </>
        )
}
export default Pengeluaran;
