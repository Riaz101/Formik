import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const header = { "Content-Type": "application/json" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Click");
    axios
      .post("https://6579b1051acd268f9af9c282.mockapi.io/r/isdp", {
        name: name,
        email: email,
        course: course,
        city: city,
        contact: contact
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <body class="flex grid justify-items-stretch">
     <div className="flex flex-col justify-self-center   m-0 container">
    
      <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Create Students</span> Data </h1>
        <Link to="/read">
          <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">  Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            className="form-input border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Course
          </label>
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            onChange={(e) => setName(e.target.value)}
          />
        </div>


                <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

                <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Number
          </label>
          <input
            type="text"
            className="form-input border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            onChange={(e) => setName(e.target.value)}
          />
        </div>




        <button
          type="submit"
          className="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </body>
  );
}

export default Create;











// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// function Create() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const history = useNavigate();

//   const header = { "Content-Type": "application/json" };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Click");
//     axios
//       .post("https://6579b1051acd268f9af9c282.mockapi.io/r/isdp", {
//         name: name,
//         email: email,
//         header,
//       })
//       .then(() => {
//         history("/read");
//       });
//   };

//   return (
//     <>
//     <div className="d-flex justify-content-between m-4">
//       <h2>Create</h2>
//       <Link to="/read">
//       <button className="btn btn-primary">Show Data</button>
//       </Link>
//       </div>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }

// export default Create;