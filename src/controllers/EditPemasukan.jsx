import React from 'react';
import UpdatePemasukan from '../views/pemasukan/updatePemasukan';

const EditPemasukan = (props) => {
  const data = props.match.params.id;
  
  return (
    <>
      <div className="container md-6 mt-4 d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-header bg-info text-light">
            Edit Pemasukan
          </div>
          <div className="card-body">
              <UpdatePemasukan id={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPemasukan;
