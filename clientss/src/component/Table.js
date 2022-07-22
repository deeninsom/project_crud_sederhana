import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Table = () => {
  useEffect(() => {
    getAllData();
  }, []);
  //menampilkan semua data
  const [dataPost, setdataPost] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageCount] = useState(5);
  const getAllData = () => {
    axios
      .get("/api/data")
      .then((response) => {
        const allData = response.data.data_barang;
        setdataPost(allData)
      })
      .catch((error) => console.log(`error: ${error}`));
  };
  //melakukan action pada item search
  const [search, setSearch] = useState("");
  const indexOfLastPost = currentPage * pageCount;
  const indexOfFirsPost = indexOfLastPost - pageCount;
  const currentPost = dataPost.slice(indexOfFirsPost, indexOfLastPost)
  const howManyPages = Math.ceil(dataPost.length/pageCount)
  //menghapus data
  const deleteData = async (id) => {
    try {
      await axios.delete(`/api/data/${id}`);
      getAllData();
    } catch (error) {
      console.log(error);
    }
  };

 


  return (
    <div className="App">
      <div className="container py-4">
        <h1>CRUD</h1>
        <h4>STOK BARANG</h4>
        <div className="rxid-table">
          <div className="rxid-table-header">
            <div className="input-group ">
              <span className="input-group-text" id="addon-wrapping">
                <em className="fa fa-search"></em>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search ..."
                aria-describedby="addon-wrapping"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="add-data d-grid ">
              <Link to="add" type="button" className="btn btn-success">
                <i className="fa fa-plus"></i> Add New
              </Link>
            </div>
          </div>
          <div className="rxid-table-body">
            <div className="table-responsive">
              <table className="table table-striped">
                {!dataPost ? (
                  "No data found"
                ) : (
                  <thead>
                    <tr>
                      <th className="sortable">
                        <div className="th-content">
                          <span className="th-text">No</span>
                          <span className="sort">
                            <em className="fa fa-sort" />
                          </span>
                        </div>
                      </th>
                      <th className="sortable">
                        <div className="th-content">
                          <span className="th-text">Nama Barang</span>
                          <span className="sort">
                            <em className="fa fa-sort" />
                          </span>
                        </div>
                      </th>
                      <th className="sortable">
                        <div className="th-content">
                          <span className="th-text">Deskripsi</span>
                          <span className="sort">
                            <em className="fa fa-sort" />
                          </span>
                        </div>
                      </th>
                      <th className="sortable">
                        <div className="th-content">
                          <span className="th-text">Jumlah Barang</span>
                          <span className="sort">
                            <em className="fa fa-sort" />
                          </span>
                        </div>
                      </th>
                      <th className="sortable">
                        <div className="th-content">
                          <span className="th-text">Harga Barang</span>
                          <span className="sort">
                            <em className="fa fa-sort" />
                          </span>
                        </div>
                      </th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                )}

                <tbody>
                  {currentPost
                    .filter((data) =>
                      data.namabarang.toLowerCase().includes(search)
                    )
                    .map((data, _id) => {
                      return (
                        <tr key={_id}>
                          <td>{_id + 1}</td>
                          <td>{data.namabarang}</td>
                          <td>{data.deskripsi}</td>
                          <td>( {data.jumlah} pcs )</td>
                          <td>Rp.{data.harga}</td>
                          <td className="d-grid gap-2 d-flex">
                            <Link
                              to={`Update/${data._id}`}
                              className="btn btn-sm btn-warning mx-2 "
                            >
                              <em className="fa fa-solid fa-pencil"></em>
                            </Link>
                            <button
                              onClick={(e) => deleteData(data._id)}
                              className="btn btn-sm btn-danger"
                            >
                              <em className="fa fa-solid fa-trash"></em>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rxid-table-footer">
            <div className="select-max-row">
            </div>
            <Pagination pages={howManyPages.length} setcurrentPage={setcurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;




//  {
//    /* <select
//                 className="form-select form-select-sm"
//                 aria-label="Default select example"
//               >
//                 <option value={5}>5</option>
//                 <option value={10}>10</option>
//                 <option value={15}>15</option>
//               </select> */
//  }
