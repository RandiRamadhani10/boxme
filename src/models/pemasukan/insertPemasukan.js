import dataPemasukan from "../data/dataPemasukan";
import dataBarang from "../data/dataBarang";
import { v4 as uuidv4 } from "uuid";
import AlertJS from "../../utils/alert";
import moment from "moment";
import dataLocal from "../data/dataLocal";
const insertPemasukan = async ({
  id_barang,
  jumlah,
  total_harga,
  created_at,
}) => {
  let date = new Date();
  date = moment(date).format("YYYY-MM-DD");
  const data = {
    id: uuidv4(),
    id_barang,
    jumlah,
    total_harga,
    created_at,
    updated_at: date,
  };
  dataPemasukan.push(data);

  const [barang] = dataBarang.filter((data) => data.id === id_barang);
  barang.jumlah += jumlah;

  dataLocal.SetData(dataBarang,"dataLocalBarang");
  dataLocal.SetData(dataPemasukan, "dataLocalPemasukan");
  return AlertJS.msg("Data Berhasil Ditambah", "success");
};

export default insertPemasukan;
