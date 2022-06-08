import React from 'react';
import dataBarang from '../../models/data/dataBarang';
import { Link } from 'react-router-dom';
import deleteBarang from '../../models/barang/deleteBarang';
import Swal from 'sweetalert2';

const viewsBarang = (props) => {
    console.log(dataBarang);
    const formButton = (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('idBarang'))
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: "Barang, pemasukan, dan pengeluaran yang berhubungan akan dihapus dan tidak akan bisa dikembalikan.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                 deleteBarang(data.get('idBarang'));
                  props.renderData();
              Swal.fire(
                'Terhapus!',
                'Data berhasil dihapus.',
                'success'
              )
            }
          })
    };
    return (
        <>
        <table className="table table-striped table-sm">
        <thead className="table">
            <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga Jual</th>
                <th scope="col">Aksi</th>
            </tr>
        </thead>
            <tbody>
              {
                dataBarang.map((data,index)=>{  
                    return(
                    <tr>
                        <th scope="col">{index+1}</th>
                        <th scope="col">{data.nama}</th>
                        <th scope="col">{data.jumlah}</th>
                        <th scope="col">Rp.{data.harga}</th>
                        <th scope="col" className=" container d-flex justify-content-center">
                            <div>
                                <Link to={`/barang/${data.id}`}>
                                    <button key={data.id} className="btn btn-primary mx-1 btn-sm">
                                        <i class="bi-pen"></i>
                                    </button>
                                </Link>
                            </div>
                        <div>
                            <form onSubmit={formButton}>
                                <input name="idBarang" type="text" value={data.id} hidden/>
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

export default viewsBarang;
