import React from 'react';
import { Redirect } from 'react-router-dom';
import UpdateBarang from '../views/barang/updateBarang';


const Editbarang = (props) => {
  const data = props.match.params.id;
  const redirect = () => <Redirect to="/barang" />;
  
  return (
    <>
      <div className="container md-6 mt-4 d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-header bg-info text-light">
            Edit Barang
          </div>
          <div className="card-body">
              <UpdateBarang id={data} redirect={redirect} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Editbarang;
