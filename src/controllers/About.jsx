import React from "react";
import "../style.css";
const About = () => {
  return (
    <>
      <div className="me p-2 justify-content-center">
        <div className="container mt-4">
          <div className="row justify-content-between ">
            <div className="col-md-4 mt-4">
              <img src="assets/boxmelogo.png" class="img-fluid" alt="" />
            </div>
            <div className="col mt-4">
              <div className="card-body">
                <h3 className="card-title">Boxme</h3>
                <p class="card-text">
                  Adalah sebuah aplikasi berbasis web, yang berjalan dalam
                  mendukung operasi manajemen di dalam gudang, seperti Mencatat
                  barang masuk dan keluar, mencatat pendapatan dan belanja,
                  memonitoring jumlah stock barang. Aplikasi ini tidak memiliki
                  database, agar data user tetap tersimpan, Boxme menggunakan
                  fitur localstorage yang sudah disediakan oleh browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
          <div className="container">
              <div className="row justify-content-center">
                 <div className="col-md">
                    <p className="ff">Developer | Dwi Randi Ramadhani</p>
                    <p className="ff">Copyright | 2021</p>
                 </div>
              </div>
          </div>
      </footer>
    </>
  );
};

export default About;
