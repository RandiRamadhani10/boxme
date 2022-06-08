import dataBarang from "./dataBarang";
import dataPemasukan from "./dataPemasukan";
import dataPengeluaran from "./dataPengeluaran";

const dataLocal = {
  SetData(data, key) {
    const parsed = JSON.stringify(data);
    localStorage.setItem(key, parsed);
  },

  loadData(category, key) {
    const storage = localStorage.getItem(key);
    
    let data = JSON.parse(storage);

    let dataStorage = [];
    dataStorage = data;

    if (storage !== null) {
      dataStorage.map((dataa, index) => {
        category[index] = dataa;
      });
    }
    return true;
  },
};

export default dataLocal;
