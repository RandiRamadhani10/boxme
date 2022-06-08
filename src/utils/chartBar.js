import dataBarang from "../models/data/dataBarang";
import dataPemasukan from "../models/data/dataPemasukan";
import dataPengeluaran from "../models/data/dataPengeluaran";

const chartLine = () => {
  
  let  jumlahPemasukan = 0;
  dataPemasukan.map((data)=> jumlahPemasukan += data.total_harga);

  let  jumlahPengeluaran = 0;
  dataPengeluaran.map((data)=> jumlahPengeluaran += data.total_harga);

    const state = {
        labels: ['Pendapatan', 'Belanja'],
        datasets: [
          {
            label: 'Data',
            fill: false,
            lineTension: 0,
            backgroundColor: ['#ffc107','#dc3545'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [jumlahPengeluaran, jumlahPemasukan]
          }
        ]
      }
      return state;
}

export default chartLine;
