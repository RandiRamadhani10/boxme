import dataBarang from "../models/data/dataBarang";
import dataPemasukan from "../models/data/dataPemasukan";
import dataPengeluaran from "../models/data/dataPengeluaran";

const chartDonuts = () => {
    let  jumlahBarang = 0;
    dataBarang.map((data)=> jumlahBarang += data.jumlah);

    let  jumlahPemasukan = 0;
    dataPemasukan.map((data)=> jumlahPemasukan += data.jumlah);

    let  jumlahPengeluaran = 0;
    dataPengeluaran.map((data)=> jumlahPengeluaran += data.jumlah);


    const state = {
        labels: ['Stock', 'Barang masuk', 'Barang Keluar',],
        datasets: [
          {
            label: 'Kategori',
            backgroundColor: [
              '#198754',
              '#dc3545',
              '#ffc107',
            ],
            hoverBackgroundColor: [
            '#0d472c',
            '#58151c',
            '#775a04',
            ],
            data: [jumlahBarang, jumlahPemasukan, jumlahPengeluaran,]
          }
        ]
      }
      return state;
}

export default chartDonuts;
