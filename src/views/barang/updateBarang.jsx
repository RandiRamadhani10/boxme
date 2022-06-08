import React from 'react';
import { useHistory } from 'react-router-dom';
import dataBarang from '../../models/data/dataBarang';
import putBarang from '../../models/barang/putBarang';
import moment from 'moment';

const UpdateBarang = (props) => {
  const history = useHistory();

  const { id } = props;

  const formSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    await putBarang({
      id,
      nama: data.get("namaBarang"),
      jumlah: parseInt(data.get("jumlahBarang")),
      harga: parseInt(data.get("hargaBarang")),
      created_at: data.get("tanggal"),
    });
    history.push('/barang');
  };
  return (
    <>
      {
        dataBarang.map((data) => {
          if (data.id === id) {
            return (
              <div className="container-sm">
                <form onSubmit={formSubmit}>
                  <label For="namaBarang" className="form-label pt-2">Nama Barang</label>
                  <input id="namaBarang" defaultValue={data.nama} name="namaBarang" className="form-control" type="text" required />
                  <label For="jumlahBarang" className="form-label pt-2">Jumlah Barang</label>
                  <input id="hargaBarang" defaultValue={data.jumlah} name="jumlahBarang" className="form-control" min="0" type="number" required />
                  <label For="hargaBarang" className="form-label pt-2">Harga Jual Barang</label>
                  <input id="hargaBarang" defaultValue={data.harga} name="hargaBarang" className="form-control" min="0" type="number" required />
                  <label For="tanggal" className="form-label pt-2">Tanggal</label>
                  <input id="tanggal" defaultValue={data.created_at} name="tanggal" className="form-control" min="0" type="date" required />
                  <button className="btn btn-success mt-2" type="submit">Simpan</button>
                </form>
              </div>
            );
          }
        })

      }
    </>
  );
};

export default UpdateBarang;
