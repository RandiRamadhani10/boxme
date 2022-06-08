import React, { useState } from 'react';
import dataBarang from '../models/data/dataBarang';
import CreateBarang from '../views/barang/createBarang';
import ViewsBarang from '../views/barang/viewsBarang';
import loadDataFromLocal from '../models/data/loadDataFromLocal';

const Barang = () => {
    let [ getData, setData ] = useState({
        reload:false
    });
    loadDataFromLocal(dataBarang,"dataLocalBarang");
    function render(){ 
        setData({
            reload:true,
        }) 
    }

        return (
            <>
                <div className="container md-6 mt-4">
                  <div className="card">
                  <div class="card-header bg-primary text-light">
                        Manajemen Barang
                    </div>
                  <div className="row card-body">
                    <div className=" col-md-4 w-5 p-3 m-2 col-sm">
                        <CreateBarang  renderData = { render }/>
                    </div>
                    <div className="col-md p-3 m-2 col-sm">
                        <div className="card table-responsive">
                            <ViewsBarang  renderData = { render }/>
                        </div>
                    </div>
                   </div>
                  </div>
                </div>
            </>
        );

}
export default Barang;
