import dataBarang from "../data/dataBarang";
import { v4 as uuidv4 } from 'uuid';
import AlertJS from "../../utils/alert";
import moment from 'moment';
import dataLocal from "../data/dataLocal";

const insertBarang = async ({
    nama,
    jumlah,
    harga
}) => {

    let date = new Date;
    date = moment(date).format("YYYY-MM-DD");
    const data ={id:uuidv4(),nama,jumlah, harga, created_at:date, updated_at:date};
    dataBarang.push(data);
    dataLocal.SetData(dataBarang,"dataLocalBarang");
    return AlertJS.msg("Data Berhasil Ditambah","success");
}

export default insertBarang;
