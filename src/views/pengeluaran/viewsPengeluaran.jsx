import React from 'react';
import { Link } from 'react-router-dom';
import dataPengeluaran from '../../models/data/dataPengeluaran';
import dataBarang from '../../models/data/dataBarang';
import Swal from 'sweetalert2';
import deletePengeluaran from '../../models/pengeluaran/deletePengeluaran';
import moment from 'moment';
const viewsPengeluaran= (props) => {

    const getNamaBarang = (idBarang)=>{
        const [barang] = dataBarang.filter((data)=> data.id === idBarang);
        if(!barang) return null;
        return barang.nama;
    }

    const formSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: "data akan dihpus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                deletePengeluaran(data.get('idPengeluaran'));
                props.renderData();
              Swal.fire(
                'Terhapus!',
                'Data berhasil dihapus.',
                'success'
              )
            }
          })
    }

    return (
        <>
        <table className="table table-striped table-sm ">
        <thead className="table">
            <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Aksi</th>
            </tr>
        </thead>
            <tbody>
              {
                dataPengeluaran.map((data,index)=>{  
                    return(
                    <tr>
                        <th scope="col">{index+1}</th>                              
                        <th scope="col">{getNamaBarang(data.id_barang)}</th>
                        <th scope="col">{data.jumlah}</th>
                        <th scope="col">Rp.{data.total_harga}</th>
                        <th scope="col">{moment(data.created_at).format("DD/MM/YYYY")}</th>
                        <th scope="col" className=" container d-flex justify-content-center">
                            <div>
                                <Link to={`/pengeluaran/${data.id}`}>
                                    <button key={data.id} className="btn btn-primary mx-1 btn-sm">
                                        <i class="bi-pen"></i>
                                    </button>
                                </Link>
                            </div>
                        <div>
                            <form onSubmit={formSubmit}>
                                <input name="idPengeluaran" type="text" value={data.id} hidden/>
                            <button type="submit"  className="btn btn-danger mx-1 btn-sm" >
                                <i class="bi-trash"></i>
                            </button>
                            </form>
                        </div>
                        </th>
                    </tr>
                    );
                    })
              }
            </tbody>
        </table>
        </>
    );
}

export default viewsPengeluaran;
