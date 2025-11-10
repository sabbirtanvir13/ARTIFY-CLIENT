
// import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const AddArtWorks = () => {
//   const { user } = useContext(AuthContext); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const artwork = {
//       image: form.image.value,
//       title: form.title.value,
//       category: form.category.value,
//       medium: form.medium.value,
//       description: form.description.value,
//       dimensions: form.dimensions.value,
//       price: form.price.value,
//       visibility: form.visibility.value,
//       userName: user?.displayName || "Anonymous",
//       userEmail: user?.email || "",
//       createdAt: new Date().toISOString(),
//     };

//     console.log(artwork);

//     fetch("http://localhost:3000/artifys", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(artwork)
//     })
//     .then(res => res.json())
//    .then(data => {
//   console.log(data); 
//     })
//     .catch(err => console.error(err));
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
//           Add New Artwork
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
     
//           <div>
//             <label className="font-semibold text-gray-700">Image URL</label>
//             <input
//               type="text"
//               name="image"
//               required
//               className="input input-bordered w-full"
//               placeholder="Enter artwork image URL"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Title</label>
//             <input
//               type="text"
//               name="title"
//               required
//               className="input input-bordered w-full"
//               placeholder="Enter artwork title"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Category</label>
//             <input
//               type="text"
//               name="category"
//               required
//               className="input input-bordered w-full"
//               placeholder="Enter art category"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Medium / Tools</label>
//             <input
//               type="text"
//               name="medium"
//               required
//               className="input input-bordered w-full"
//               placeholder="Enter your art tools"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Description</label>
//             <textarea
//               name="description"
//               rows="3"
//               required
//               className="textarea textarea-bordered w-full"
//               placeholder="Write a short description"
//             ></textarea>
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Dimensions (optional)</label>
//             <input
//               type="text"
//               name="dimensions"
//               className="input input-bordered w-full"
//               placeholder="e.g. 20x30 cm"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Price (optional)</label>
//             <input
//               type="number"
//               name="price"
//               className="input input-bordered w-full"
//               placeholder="e.g. 200"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">Visibility</label>
//             <select name="visibility" required className="select select-bordered w-full">
//               <option value="Public">Public</option>
//               <option value="Private">Private</option>
//             </select>
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">User Name</label>
//             <input
//               type="text"
//               name="userName"
//               value={user?.displayName || "Anonymous"}
//               readOnly
//               className="input input-bordered w-full bg-gray-100"
//             />
//           </div>

//           <div>
//             <label className="font-semibold text-gray-700">User Email</label>
//             <input
//               type="email"
//               name="userEmail"
//               value={user?.email || ""}
//               readOnly
//               className="input input-bordered w-full bg-gray-100"
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200"
//           >
//             Add Artwork
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddArtWorks;


import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AddArtWorks = () => {
  const { user } = useContext(AuthContext); // Correct useContext

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const artwork = {
      image: form.image.value,
      title: form.title.value,
       artistName: form.artistName.value,
      category: form.category.value,
      medium: form.medium.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "",
      createdAt: new Date().toISOString(),
    };

    console.log('Submitting artwork:', artwork);

    fetch("http://localhost:3000/artifys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artwork)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Server response:', data);
        if(data.success){
          alert("Artwork added successfully!");
          form.reset();
        } else {
          alert("Failed to add artwork");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Add New Artwork
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input type="text" name="image" required placeholder="Image URL" className="input input-bordered w-full" />

          <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full" />

          <input type="text" name="artistName" required placeholder="Artist Name"className="input input-bordered w-full"/>

          <input type="text" name="category" required placeholder="Category" className="input input-bordered w-full" />
          <input type="text" name="medium" required placeholder="Medium / Tools" className="input input-bordered w-full" />
          <textarea name="description" required placeholder="Description" rows={3} className="textarea textarea-bordered w-full"></textarea>
          <input type="text" name="dimensions" placeholder="Dimensions (optional)" className="input input-bordered w-full" />
          <input type="number" name="price" placeholder="Price (optional)" className="input input-bordered w-full" />
          <select name="visibility" required className="select select-bordered w-full">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>

          <input
            type="text"
            name="userName"
            value={user?.displayName || "Anonymous"}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <input
            type="email"
            name="userEmail"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <button
            type="submit"
            className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200"
          >
            Add Artwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtWorks;

