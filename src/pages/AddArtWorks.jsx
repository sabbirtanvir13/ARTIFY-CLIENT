
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const AddArtWorks = ({ onNewPublicArtwork }) => {
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const form = e.target;

//     const artwork = {
//       image: form.image.value,
//       title: form.title.value,
//       artistName: form.artistName.value,
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

//     fetch("http://localhost:3000/artifys", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(artwork)
//     })
//       .then(res => res.json())
//       .then(data => {
//         setLoading(false);
//         if(data.success){
//           alert("Artwork added successfully!");
//           form.reset();



//           // Only show in Explore if Public
//           if(data.artwork.visibility === "Public" && onNewPublicArtwork){
//             onNewPublicArtwork(data.artwork);
//           }
//         } else {
//           alert("Failed to add artwork");
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//         alert("Something went wrong!");
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
//           Add New Artwork
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input type="text" name="image" required placeholder="Image URL" className="input input-bordered w-full" />
//           <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full" />
//           <input type="text" name="artistName" required placeholder="Artist Name" className="input input-bordered w-full"/>
//           <input type="text" name="category" required placeholder="Category" className="input input-bordered w-full" />
//           <input type="text" name="medium" required placeholder="Medium / Tools" className="input input-bordered w-full" />
//           <textarea name="description" required placeholder="Description" rows={3} className="textarea textarea-bordered w-full"></textarea>
//           <input type="text" name="dimensions" placeholder="Dimensions (optional)" className="input input-bordered w-full" />
//           <input type="number" name="price" placeholder="Price (optional)" className="input input-bordered w-full" />
//           <select name="visibility" required className="select select-bordered w-full">
//             <option value="Public">Public</option>
//             <option value="Private">Private</option>
//           </select>
//           <input type="text" name="userName" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />
//           <input type="email" name="userEmail" value={user?.email || ""} readOnly className="input input-bordered w-full bg-gray-100" />

//           <button type="submit" disabled={loading} className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200">
//             {loading ? "Adding..." : "Add Artwork"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddArtWorks;


// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const AddArtWorks = () => {
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const form = e.target;

//     const artwork = {
//       image: form.image.value,
//       title: form.title.value,
//       artistName: form.artistName.value,
//       category: form.category.value,
//       medium: form.medium.value,
//       description: form.description.value,
//       dimensions: form.dimensions.value,
//       price: form.price.value,
//       visibility: form.visibility.value,
//       // userName: user?.displayName || 'Anonymous',
//       // userEmail: user?.email || '',
//        userName: user?.displayName || 'Anonymous', // auto-fill name
//       userEmail: user?.email || '',              // auto-fill email
//       createdAt: new Date().toISOString()
//     };

//     fetch('http://localhost:3000/artifys', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(artwork)
//     })
//       .then(res => res.json())
//       .then(data => {
//         setLoading(false);
//         if (data.success) {
//           alert('Artwork added successfully!');
//           form.reset();
//         } else {
//           alert('Failed to add artwork.');
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//         alert('Something went wrong!');
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
//           Add New Artwork
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input type="text" name="image" placeholder="Image URL" required className="input input-bordered w-full" />
//           <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full" />
//           <input type="text" name="artistName" placeholder="Artist Name" required className="input input-bordered w-full" />
//           <input type="text" name="category" placeholder="Category" required className="input input-bordered w-full" />
//           <input type="text" name="medium" placeholder="Medium / Tools" required className="input input-bordered w-full" />
//           <textarea name="description" placeholder="Description" rows={3} required className="textarea textarea-bordered w-full"></textarea>
//           <input type="text" name="dimensions" placeholder="Dimensions (optional)" className="input input-bordered w-full" />
//           <input type="number" name="price" placeholder="Price (optional)" className="input input-bordered w-full" />
//           <select name="visibility" required className="select select-bordered w-full">
//             <option value="Public">Public</option>
//             <option value="Private">Private</option>
//           </select>
//           {/* <input type="text" name="userName" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />

//           <input type="email" name="userEmail" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" /> */}
//              {/* Auto-fill user info */}
//           <input type="text" name="userName" value={user?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />
//           <input type="email" name="userEmail" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" />

//           <button type="submit" disabled={loading} className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200">
//             {loading ? 'Adding...' : 'Add Artwork'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddArtWorks;


// import React, { use, useState } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const AddArtWorks = () => {
//   const { User } = use(AuthContext); // লগইন ইউজার
//   const [loading, setLoading] = useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   const form = e.target;

//   //   const artwork = {
//   //     image: form.image.value,
//   //     title: form.title.value,
//   //     artistName: form.artistName.value,
//   //     category: form.category.value,
//   //     medium: form.medium.value,
//   //     description: form.description.value,
//   //     dimensions: form.dimensions.value,
//   //     price: form.price.value,
//   //     visibility: form.visibility.value,
//   //     userName: user.displayName || 'Anonymous', // auto-fill
//   //     userEmail: user?.email || '',              // auto-fill
//   //     createdAt: new Date().toISOString(),
//   //   };

//   //   fetch('http://localhost:3000/artifys', {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify(artwork)
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       setLoading(false);
//   //       if (data.success) {
//   //         alert('Artwork added successfully!');
//   //         form.reset();
//   //       } else {
//   //         alert('Failed to add artwork.');
//   //       }
//   //     })
//   //     .catch(err => {
//   //       console.error(err);
//   //       setLoading(false);
//   //       alert('Something went wrong!');
//   //     });
//   // };


//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!User || !User.email) {
//     alert("User not logged in properly or email not available.");
//     return;
//   }

//   setLoading(true);
//   const form = e.target;

//   const artwork = {
//     image: form.image.value,
//     title: form.title.value,
//     artistName: form.artistName.value,
//     category: form.category.value,
//     medium: form.medium.value,
//     description: form.description.value,
//     dimensions: form.dimensions.value,
//     price: form.price.value,
//     visibility: form.visibility.value,
//     userName: User.displayName || 'Anonymous',
//     userEmail: User.email,
//     createdAt: new Date().toISOString(),
//   };
//   console.log(artwork)

//   fetch('http://localhost:3000/artifys', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(artwork)
//   })
//     .then(res => res.json())
//     .then(data => {
//       setLoading(false);
//       if (data.success) {
//         alert('Artwork added successfully!');
//         form.reset();
//       } else {
//         alert('Failed to add artwork.');
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       setLoading(false);
//       alert('Something went wrong!');
//     });
// };


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
//           Add New Artwork
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input type="text" name="image" placeholder="Image URL" required className="input input-bordered w-full" />
//           <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full" />
//           <input type="text" name="artistName" placeholder="Artist Name" required className="input input-bordered w-full" />
//           <input type="text" name="category" placeholder="Category" required className="input input-bordered w-full" />
//           <input type="text" name="medium" placeholder="Medium / Tools" required className="input input-bordered w-full" />
//           <textarea name="description" placeholder="Description" rows={3} required className="textarea textarea-bordered w-full"></textarea>
//           <input type="text" name="dimensions" placeholder="Dimensions (optional)" className="input input-bordered w-full" />
//           <input type="number" name="price" placeholder="Price (optional)" className="input input-bordered w-full" />
//           <select name="visibility" required className="select select-bordered w-full">
//             <option value="Public">Public</option>
//             <option value="Private">Private</option>
//           </select>

//           {/* Name & Email Auto-fill, read-only */}
//           <input type="text" name="userName" value={User?.displayName || ''} readOnly className="input input-bordered w-full bg-gray-100" />

//           {/* <input type="email" name="userEmail" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100" /> */}

//              <input
//        type="email"
//             name="userEmail"
//             value={User?.email || ""}
//           readOnly
//           className="input input-bordered w-full bg-gray-100"
//       />

//           <button type="submit" disabled={loading} className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200">
//             {loading ? 'Adding...' : 'Add Artwork'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddArtWorks;


import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AddArtWorks = () => {
  const { User } = useContext(AuthContext); // ✅ logged-in user
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!User || !User.email) {
      alert("User not logged in properly or email not available.");
      return;
    }

    setLoading(true);
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
      userName: User.displayName || "Anonymous",
      userEmail: User.email,
      createdAt: new Date().toISOString(),
    };

    fetch("http://localhost:3000/artifys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artwork),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          alert("✅ Artwork added successfully!");
          form.reset();
        } else {
          alert("❌ Failed to add artwork.");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert("⚠️ Something went wrong!");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          ➕ Add New Artwork
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="artistName"
            placeholder="Artist Name"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="medium"
            placeholder="Medium / Tools"
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            placeholder="Description"
            rows={3}
            required
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            name="dimensions"
            placeholder="Dimensions (optional)"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price (optional)"
            className="input input-bordered w-full"
          />
          <select
            name="visibility"
            required
            className="select select-bordered w-full"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>

          {/* Auto-filled User Info */}
          <input
            type="text"
            name="userName"
            value={User?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="email"
            name="userEmail"
            value={User?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-full hover:scale-105 transition-transform duration-200"
          >
            {loading ? "Adding..." : "Add Artwork"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtWorks;



