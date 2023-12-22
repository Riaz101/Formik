import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState();
  // const [tabledark, setTabledark] = useState('');

  const setToLocalSttorage = (id, name, email, course, city, contact,) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('course', course);
    localStorage.setItem('city', city);
    localStorage.setItem('contact', contact);

  };

  function handleDelete(id) {
    axios.delete(`https://6579b1051acd268f9af9c282.mockapi.io/r/isdp/${id}`).then(() => {
      getData();
    });
  }

  function getData() {
    axios.get('https://6579b1051acd268f9af9c282.mockapi.io/r/isdp').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      
      <div className="flex justify-between m-0 container">
        <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">ISDP CLASS</h1>
        <Link to="/">
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Students</button>

        </Link>
      </div>
      <div class="max-w-screen-xl mx-auto">
      <table className= " center w-full">
        <thead>
          <tr>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">No</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Name</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Email</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Course</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">City</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Contact</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Update</th>
            <th className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((DataG) => (
            <tr key={DataG.id}>
              <th scope="row">{DataG.id}</th>
              <td>{DataG.name}</td>
              <td>{DataG.email}</td>
               <td>{DataG.course}</td>
              <td>{DataG.city}</td>
              <td>{DataG.contact}</td>
              

              <td>
                <Link to="/update">
                  <button
                    className="bg-green-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      setToLocalSttorage(DataG.id, DataG.name, DataG.email, DataG.course, DataG.city, DataG.contact,)
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"

                  onClick={() => handleDelete(DataG.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Read;






// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// function Read() {
//   const [data, setData] = useState();
//   const [tabledark, setTabledark] = useState("");

//   const setToLocalSttorage = (id, name, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   };

//   function handleDelete(id) {
//     axios
//       .delete(`https://6579b1051acd268f9af9c282.mockapi.io/r/isdp/${id}`)
//       .then(() => {
//         getData();
//       });
//   }

//   function getData() {
//     axios
//       .get("https://6579b1051acd268f9af9c282.mockapi.io/r/isdp")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       });
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
    
//       <div className="form-check form-switch">
//         <input
//           className="form-check-input"
//           type="checkbox"
//           onClick={() => {
//             if (tabledark === "table-dark") setTabledark("");
//             else setTabledark("table-dark");
//           }}
//         />
//       </div>
//       <div className="d-flex justify-content-between m-4">
//         <h2>Read Operation</h2>
//         <Link to="/">
//           <button className="btn btn-secondary">Create</button>
//         </Link>
//       </div>
//       <table className={`table ${tabledark}`}>
//       <thead>
//   <tr>
//     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
//     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
//     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
//   </tr>
// </thead>
//         {data?.map((DataG) => {
//           return (
//             <>
//               <tbody>
//                 <tr>
//                   <th scope="row">{DataG.id}</th>
//                   <td>{DataG.name}</td>
//                   <td>{DataG.email}</td>
//                   <td>
//                     <Link to="/update">
//                       <button
//                         className="btn-success"
//                         onClick={() =>
//                           setToLocalSttorage(
//                             DataG.id,
//                             DataG.name,
//                             DataG.email
//                           )
//                         }
//                       >
//                         Edit
//                       </button>
//                     </Link>
//                   </td>
//                   <td>
//                     <button
//                       className="btn-danger"
//                       onClick={() => handleDelete(DataG.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </>
//           );
//         })}
//       </table>

//     </>
//   );
// };

// export default Read;