import AlertJS from '../../utils/alert';
import dataBarang from '../data/dataBarang';
import dataPemasukan from '../data/dataPemasukan';
import moment from 'moment';
import dataLocal from '../data/dataLocal';
const putPemasukan = async (newData) => {
  console.log(newData);
  const { jumlahLama, id, id_barang, jumlah,total_harga, created_at} = newData;
  const index = dataPemasukan.findIndex((data) => data.id === id);
  const [ barang ] = dataBarang.filter((data) => data.id === id_barang);

  let date = new Date;
  date = moment(date).format("YYYY-MM-DD");

  let barangJumlah = barang.jumlah
  barangJumlah = barang.jumlah - jumlahLama;
  barang.jumlah = barangJumlah + jumlah;


  dataPemasukan[index] = {
    id,
    id_barang,
    jumlah,
    total_harga,
    created_at,
    updated_at:date,
  };

  dataLocal.SetData(dataBarang,"dataLocalBarang");
  dataLocal.SetData(dataPemasukan,"dataLocalPemasukan");
  return AlertJS.msg("Data berhasil Disimpan", "success");
};
export default putPemasukan;
