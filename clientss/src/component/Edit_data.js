import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Edit_data() {
      const [namabarang, setnamabarang] = useState("");
      const [deskripsi, seteskripsi] = useState("");
      const [jumlah, setjumlah] = useState("");
      const [harga, setharga] = useState("");
      const navigate = useNavigate();
      const { id } = useParams();
      useEffect(() => {
        getDataById();
      }, []);
      //pemanggilan data by :id
      const getDataById = async () => {
        const response = await axios.get(`/api/data/${id}`);
        const data = await response.data.data_barang_id;
        setnamabarang(data.namabarang);
        seteskripsi(data.deskripsi);
        setjumlah(data.jumlah);
        setharga(data.harga);
      };
      //pembaruan data
      const updateData = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`/api/data/${id}`, {
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
              <form onSubmit={updateData}>
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
export default Edit_data;
