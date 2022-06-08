import React, { useState } from "react";
import ViewsPemasukan from "../views/pemasukan/viewsPemasukan";
import CreatePemasukan from "../views/pemasukan/createPemasukan";
import dataPemasukan from "../models/data/dataPemasukan";
import loadDataFromLocal from "../models/data/loadDataFromLocal";
const Pemasukan = () => {
  let [getData, setData] = useState({
    reload: false,
  });
  loadDataFromLocal(dataPemasukan, "dataLocalPemasukan");
  function render() {
    setData({
      reload: true,
    });
  }

  return (
    <>
      <div className="container md-6 mt-4">
        <div className="card">
          <div class="card-header bg-danger text-light">
            Manajemen Pemasukan Barang
          </div>
          <div className=" card-body">
            <div className="row">
              <div className="col-md-4 col-sm">
                <CreatePemasukan renderData={render} />
              </div>
              <div className="col-md mt-4  col-sm">
                <div className="card table-responsive">
                  <ViewsPemasukan renderData={render} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pemasukan;
