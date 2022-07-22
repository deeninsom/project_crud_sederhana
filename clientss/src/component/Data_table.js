// import React from 'react'
// import { Link } from "react-router-dom";
// function Data_table({ dataPost, search, currentPost, deleteData }) {
//   return (
   
//     <tbody>
//       {
//         dataPost
//         .filter((data) => data.namabarang.toLowerCase().includes(search))
//           .map((data, _id) => {
//            console.log(dataPost);
//           return (
//             <tr key={_id}>
//               <td>{_id + 1}</td>
//               <td>{data.namabarang}</td>
//               <td>{data.deskripsi}</td>
//               <td>({data.jumlah} pcs)</td>
//               <td>Rp.{data.harga}</td>
//               <td className=" d-grid gap-2 d-flex">
//                 <Link
//                   to={`Update/${data._id}`}
//                   className="btn btn-sm btn-warning mx-2 "
//                 >
//                   <em className="fa fa-solid fa-pencil"></em>
//                 </Link>
//                 <button
//                   onClick={(e) => deleteData(data._id)}
//                   className="btn btn-sm btn-danger"
//                 >
//                   <em className="fa fa-solid fa-trash"></em>
//                 </button>
//               </td>
//             </tr>
//           );
//         })}
//     </tbody>
//   );
// }

// export default Data_table