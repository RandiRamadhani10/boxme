import React from 'react';
import dataBarang from '../../models/data/dataBarang';
import insertPemasukan from '../../models/pemasukan/insertPemasukan';
import dataPemasukan from '../../models/data/dataPemasukan';
import AlertJS from '../../utils/alert';
const createPemasukan = (props) => {

    
    const formSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get("tanggal"));
        const idBarang =  data.get("idBarang");
        const jumlahBarang = data.get("jumlahBarang");
        const hargaBeli = data.get("hargaBeli");

        if (idBarang === "false" ){
            AlertJS.msg("Barang Belum Dipilih", "error")
        }else{
            await insertPemasukan({
                id_barang: idBarang,
                jumlah: parseInt(jumlahBarang),
                total_harga: parseInt(hargaBeli),
                created_at: data.get("tanggal")
            });
        }
       

        event.target.reset();
        props.renderData();
       
    }

    return (
    <>
        <div className="container-sm">
        <form onSubmit={formSubmit}>
            <label For="namaBarang" className="form-label pt-2">Nama Barang</label>
            <select id="namaBarang" name="idBarang" class="form-select" aria-label="Default select example">
                <option value="false" selected>Pilih Barang</option>
                {
                    dataBarang.map((data)=>{
                        return (<option value={data.id}>{data.nama}</option>)
                    })
                }
            </select>

            <label For="jumlahBarang" className="form-label pt-2">jumlah Barang</label>
            <input id="jumlahBarang" name="jumlahBarang" className="form-control" min="0" type="number" required />

            <label For="hargaBeli" className="form-label pt-2">Harga Beli</label>
            <input id="hargaBeli" name="hargaBeli" className="form-control" min="0" type="number" required />
            
            <label For="tanggal" className="form-label pt-2">Tanggal</label>
            <input id="tanggal" name="tanggal" className="form-control" min="0" type="date" required />

            <button className="btn btn-success mt-2" type="submit">Tambah</button>
        </form>
      </div>
    </>
    );
};

export default createPemasukan;
