import React from "react";
import insertBarang from "../../models/barang/insertBarang";

const CreateBarang = (props) => {
  const formSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    await insertBarang({
      nama: data.get("namaBarang"),
      jumlah: parseInt(data.get("jumlah")),
      harga: parseInt(data.get("hargaBarang")),
    });
    event.target.reset();
    props.renderData();
  };
  return (
    <>
      <div className="container-sm">
        <form onSubmit={formSubmit}>
          <label For="namaBarang" className="form-label pt-2">
            Nama Barang
          </label>
          <input id="namaBarang" name="namaBarang" className="form-control" type="text" required />
          <label For="jumlah" className="form-label pt-2">
            jumlah Barang
          </label>
          <input id="jumlah" defaultValue="0" name="jumlah" className="form-control" type="number" min="0" required />
          <label For="hargaBarang" className="form-label pt-2">
            Harga Jual Barang
          </label>
          <input id="hargaBarang" name="hargaBarang" className="form-control" type="number" min="0" required />
          <button className="btn btn-success mt-2" type="submit">
            Tambah
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBarang;
