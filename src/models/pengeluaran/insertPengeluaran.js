import dataPengeluaran from "../data/dataPengeluaran";
import dataBarang from "../data/dataBarang";
import { v4 as uuidv4 } from 'uuid';
import AlertJS from "../../utils/alert";
import moment from "moment";
import dataLocal from "../data/dataLocal";
const insertPengeluaran = async ({
    id_barang,
    jumlah,
    total_harga,
    created_at,
}) => {
    let date = new Date;
    date = moment(date).format("YYYY-MM-DD");

    const data ={id:uuidv4(),id_barang,jumlah,total_harga,created_at, updated_at:date};
    const [ barang ] = dataBarang.filter( (data) => data.id === id_barang);
    
        let barangJumlah = barang.jumlah - jumlah;

    
    if(barangJumlah < 0){
        return AlertJS.msg("Jumlah Barang Kurang Dari 1","error");
    }
    else{
        
        dataPengeluaran.push(data);
        barang.jumlah -= jumlah;
        dataLocal.SetData(dataBarang,"dataLocalBarang");
        dataLocal.SetData(dataPengeluaran,"dataLocalPengeluaran");
        return AlertJS.msg("Data Berhasil Ditambah","success");
       
    }
    
    
}

export default insertPengeluaran;