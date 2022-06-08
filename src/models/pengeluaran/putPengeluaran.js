import AlertJS from '../../utils/alert';
import dataBarang from '../data/dataBarang';
import dataPengeluaran from '../data/dataPengeluaran';
import moment from 'moment';
import dataLocal from '../data/dataLocal';
const putPengeluaran = async (newData) => {
    let date = new Date;
    date = moment(date).format("YYYY-MM-DD");
    const { jumlahLama, id, id_barang, jumlah,created_at} = newData;
    const index = dataPengeluaran.findIndex((data) => data.id === id);
    const [ barang ] = dataBarang.filter((data) => data.id === id_barang);

    let barangJumlah = barang.jumlah + jumlahLama;

    barangJumlah = barang.jumlah - jumlah;

        if(barangJumlah < 0){
            return AlertJS.msg("Barang kurang dari jumlah pengeluaran","error");
        }
        else {
            barang.jumlah = barangJumlah;
            const total = barang.harga *jumlah;
            
            dataPengeluaran[index] = {
                id,
                id_barang,
                jumlah,
                total_harga: total,
                created_at,
                update_at:date,
            };
            dataLocal.SetData(dataBarang,"dataLocalBarang");
            dataLocal.SetData(dataPengeluaran,"dataLocalPengeluaran");
            return AlertJS.msg("Data Berhasil Disimpan","success");
            
        }
  
};
export default putPengeluaran;
