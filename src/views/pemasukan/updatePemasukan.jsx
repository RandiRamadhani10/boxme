import React from 'react';
import { useHistory } from 'react-router-dom';
import dataBarang from '../../models/data/dataBarang';
import dataPemasukan from '../../models/data/dataPemasukan';
import putPemasukan from '../../models/pemasukan/putPemasukan';


const UpdatePemasukan = (props) => {
    const history = useHistory();
    const { id } = props;
    const [ pemasukan ] = dataPemasukan.filter((data) => data.id === id);
    const [ barang ] = dataBarang.filter((data) => data.id === pemasukan.id_barang);

    const formSubmit = async (event) => {
        event.preventDefault();
        
        const data = new FormData(event.target);

        await putPemasukan({
            jumlahLama: pemasukan.jumlah,
            id: pemasukan.id,
            id_barang: data.get("idBarang"),
            jumlah: parseInt(data.get("jumlahBarang")),
            total_harga: parseInt(data.get("hargaBeli")),
            created_at:data.get("tanggal")
        });

        history.push('/pemasukan');
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
                <input id="jumlahBarang" defaultValue={pemasukan.jumlah} name="jumlahBarang" min="0" className="form-control" type="number" required />
                
                <label For="hargaBeli" className="form-label pt-2">Harga Beli</label>
                <input id="hargaBeli" defaultValue={pemasukan.total_harga} name="hargaBeli" className="form-control" min="0" type="number" required />

                <label For="tanggal" className="form-label pt-2">Tanggal</label>
                  <input id="tanggal" defaultValue={pemasukan.created_at} name="tanggal" className="form-control" min="0" type="date" required />
                <button className="btn btn-success mt-2" type="submit">Simpan</button>
            </form>
        </div>
    </>
    );
};

export default UpdatePemasukan;
