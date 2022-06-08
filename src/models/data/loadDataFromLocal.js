import dataBarang from "./dataBarang";
import dataPemasukan from "./dataPemasukan";
import dataPengeluaran from "./dataPengeluaran";
import dataLocal from "./dataLocal";
const loadDataFromLocal = (data, key) => {
  if (localStorage.length > 0) {
    dataLocal.loadData(data, key);
  } else {
    return false;
  }
};

export default loadDataFromLocal;
