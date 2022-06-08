import React from 'react';
import UpdatePengeluaran from '../views/pengeluaran/updatePengeluaran';
const EditPengeluaran = (props) => {
    const data = props.match.params.id;
    return (
        <>
              <div className="container md-6 mt-4 d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-header bg-info text-light">
            Edit Pengeluaran
          </div>
          <div className="card-body">
              <UpdatePengeluaran id={data} />
          </div>
        </div>
      </div>
        </>
    );
}

export default EditPengeluaran;
