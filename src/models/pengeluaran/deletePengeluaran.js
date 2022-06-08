import dataPengeluaran from "../data/dataPengeluaran";
import dataLocal from "../data/dataLocal";
const deletePengeluaran = (id) =>{
    const index = dataPengeluaran.findIndex((data) => data.id === id);
    dataPengeluaran.splice(index, 1);
    dataLocal.SetData(dataPengeluaran,"dataLocalPengeluaran");
}

export default deletePengeluaran;