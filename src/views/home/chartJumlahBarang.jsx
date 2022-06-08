import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import chartDonuts from "../../utils/chartDonuts";
import dataBarang from "../../models/data/dataBarang";
import chartBar from "../../utils/chartBar";

const chartJumlahBarang = () => {
  const state = chartDonuts();
  const stateBar = chartBar();
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mt-4">
            <div class="card">
              <div class="card-header">Stock Barang</div>
              <div class="card-body">
                <Pie
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-8 mt-4">
            <div class="card">
              <div class="card-header">
                Pendapatan dan Belanja
              </div>
              <div class="card-body">
                <Bar
                  data={stateBar}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chartJumlahBarang;
