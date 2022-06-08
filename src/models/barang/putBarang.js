import dataBarang from '../data/dataBarang';
import AlertJS from '../../utils/alert';
import moment from 'moment';
import dataLocal from '../data/dataLocal';
const putBarang = async (newData) => {
  const { id, nama, jumlah,  harga, created_at } = newData;
  const index = dataBarang.findIndex((data) => data.id === id);
  let date = new Date;
  date = moment(date).format("YYYY-MM-DD");

  dataBarang[index] = {
    id,
    nama,
    jumlah,
    harga,
    created_at,
    updated_at : date
  };
  dataLocal.SetData(dataBarang,"dataLocalBarang");
  return AlertJS.msg("Data Berhasil Disimpan","success");
};
export default putBarang;
