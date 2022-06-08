import dataBarang from "../data/dataBarang";
import dataLocal from "../data/dataLocal";
import dataPemasukan from "../data/dataPemasukan";
import dataPengeluaran from "../data/dataPengeluaran";

const deleteBarang = async (id) => {
    const index = dataBarang.findIndex((data) => data.id === id);
    const indexPemasukan = dataPemasukan.findIndex((data) => data.id_barang === id);
    const indexPengeluaran = dataPengeluaran.findIndex((data) => data.id_barang === id);

    dataPemasukan.splice(indexPemasukan, 1);
    dataPengeluaran.splice(indexPengeluaran, 1);
    dataBarang.splice(index, 1);
    
    dataLocal.SetData(dataPemasukan,"dataLocalPemasukan");
    dataLocal.SetData(dataPengeluaran,"dataLocalPengeluaran");
    dataLocal.SetData(dataBarang,"dataLocalBarang");
    return true;
}

export default deleteBarang;
