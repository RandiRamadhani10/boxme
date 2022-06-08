import dataPemasukan from "../data/dataPemasukan";
import dataLocal from "../data/dataLocal";
const deletePemasukan = (id) =>{
    const index = dataPemasukan.findIndex((data) => data.id === id);
    dataPemasukan.splice(index, 1);
    dataLocal.SetData(dataPemasukan,"dataLocalPemasukan");
}

export default deletePemasukan;