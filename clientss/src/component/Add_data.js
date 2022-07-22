import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const baseURL = "/api/data";


function Add_data() {
  
  const [namabarang, setnamabarang] = useState("");
  const [deskripsi, seteskripsi] = useState("");
  const [jumlah, setjumlah] = useState("");
  const [harga, setharga] = useState("");

  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}`, {
        namabarang,
        deskripsi,
        jumlah,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row satu">
        <div className="col">
          <div className="card">
            <div className="card-header">Silahkan input : </div>
            <div className="card-body">
              <h1>TAMBAH BARANG</h1>
              <form onSubmit={saveData}>
                <div className="mb-4">
                  <label htmlFor="NamaBarang" className="form-label">
                    Nama Barang
                  </label>
                  <input
                    type="text"
                    name="namabarang"
                    value={namabarang}
                    onChange={(e) => setnamabarang(e.target.value)}
                    id="namabarang"
                    className="form-control"
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="NamaBarang" className="form-label">
                    Deskripsi
                  </label>
                  <input
                    type="text"
                    name="namabarang"
                    value={deskripsi}
                    onChange={(e) => seteskripsi(e.target.value)}
                    id="namabarang"
                    className="form-control"
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="NamaBarang" className="form-label">
                    Jumlah
                  </label>
                  <input
                    type="text"
                    name="namabarang"
                    value={jumlah}
                    onChange={(e) => setjumlah(e.target.value)}
                    id="namabarang"
                    className="form-control"
                  ></input>
                </div>
                <div className="mb-4">
                  <label htmlFor="NamaBarang" className="form-label">
                    Harga
                  </label>
                  <input
                    type="text"
                    name="namabarang"
                    value={harga}
                    onChange={(e) => setharga(e.target.value)}
                    id="namabarang"
                    className="form-control"
                  ></input>
                </div>
                <div className=" gap-2 d-flex">
                  <Link to="/" type="button" className="btn btn-warning ">
                    <i className="fa fa-solid fa-angle-left"></i>
                  </Link>
                  <button className="btn btn-primary btn-block">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add_data