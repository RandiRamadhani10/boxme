import React from "react";
import loadDataFromLocal from "../../models/data/loadDataFromLocal";
import dataBarang from "../../models/data/dataBarang";
import dataPengeluaran from "../../models/data/dataPengeluaran";
import dataPemasukan from "../../models/data/dataPemasukan";
const showData = () => {

    loadDataFromLocal(dataBarang,"dataLocalBarang");
    loadDataFromLocal(dataPemasukan,"dataLocalPemasukan");
    loadDataFromLocal(dataPengeluaran,"dataLocalPengeluaran");

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-evenly">
          <div className="card col-md-3 bg-success">
            <div className="card-body ">
              <p className="card-title text-white">Barang</p>
              <h5 className="card-text text-white">Total Jenis Barang {dataBarang.length}</h5>
            </div>
          </div>
          <div className="card col-md-3 bg-danger mt-2">
            <div className="card-body">
              <p className="card-title text-white">Pemasukan</p>
              <h5 className="card-text text-white">Total Data Barang Masuk {dataPemasukan.length}</h5>
            </div>
          </div>
          <div className="card col-md-3 bg-warning mt-2">
            <div className="card-body">
              <p className="card-title text-white">Barang</p>
              <h5 className="card-text text-white">Total Data Barang Keluar {dataPengeluaran.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default showData;
