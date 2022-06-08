import React from 'react';
import dataBarang from '../../models/data/dataBarang';
import insertPengeluaran from '../../models/pengeluaran/insertPengeluaran';
import AlertJS from '../../utils/alert';

const createPengeluaran = (props) => {
    const formSubmit = async (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        
        const idBarang =  data.get("idBarang");
        const jumlahBarang = data.get("jumlahBarang")
        if (idBarang === "false" ){
            AlertJS.msg("Barang Belum Dipilih", "error")
        }else{
        const index = dataBarang.findIndex((data) => data.id === idBarang);
        const totalHarga = jumlahBarang * dataBarang[index].harga;
        await insertPengeluaran({
            id_barang: idBarang,
            jumlah: parseInt(jumlahBarang),
            total_harga: parseInt(totalHarga),
            created_at: data.get("tanggal"),
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
                <input id="jumlahBarang" name="jumlahBarang" className="form-control" type="number" min="0" required />
                
                <label For="tanggal" className="form-label pt-2">Tanggal</label>
                <input id="tanggal" name="tanggal" className="form-control" min="0" type="date" required />


                <button className="btn btn-success mt-2" type="submit">Tambah</button>
            </form>
        </div>
        </>
    );
}

export default createPengeluaran;
