import React from 'react';
import { useHistory } from 'react-router-dom';
import dataBarang from '../../models/data/dataBarang';
import dataPengeluaran from '../../models/data/dataPengeluaran';
import putPengeluaran from '../../models/pengeluaran/putPengeluaran';


const UpdatePengeluaran = (props) => {
    const history = useHistory();
    const { id } = props;
    const [ pengeluaran ] = dataPengeluaran.filter((data) => data.id === id);
    const [ barang ] = dataBarang.filter((data) => data.id === pengeluaran.id_barang);

    const formSubmit = async (event) => {
        event.preventDefault();
        
        const data = new FormData(event.target);

        await putPengeluaran({
            jumlahLama: pengeluaran.jumlah,
            id: pengeluaran.id,
            id_barang: data.get("idBarang"),
            jumlah: parseInt(data.get("jumlahBarang")),
        });

        history.push('/pengeluaran');
    };

    return (
    <>         
        <div className="container-sm">
            <form onSubmit={formSubmit}>
                <label For="namaBarang" className="form-label pt-2">Nama Barang</label>
                    <select id="namaBarang" name="idBarang" class="form-select" aria-label="Default select example">
                        <option value={barang.id} selected>{barang.nama}</option>
                        {
                            dataBarang.map((data)=>{
                                return (<option value={data.id}>{data.nama}</option>)
                            })
                        }
                    </select>

                
                <label For="jumlahBarang" className="form-label pt-2">jumlah Barang</label>
                <input id="jumlahBarang" defaultValue={pengeluaran.jumlah} name="jumlahBarang" min="0" className="form-control" type="number" required />
                
                <label For="tanggal" className="form-label pt-2">Tanggal</label>
                <input id="tanggal" defaultValue={pengeluaran.created_at} name="tanggal" className="form-control" min="0" type="date" required />


                <button className="btn btn-success mt-2" type="submit">Simpan</button>
            </form>
        </div>
    </>
    );
};

export default UpdatePengeluaran;
