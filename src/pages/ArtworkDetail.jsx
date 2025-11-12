
import React, { useState } from "react";
import { useLoaderData } from "react-router";

const ArtworkDetail = () => {
  const data = useLoaderData();
  const art = data.result;
  const [isFavorited, setIsFavorited] = useState(false); //

  const handleFavorites = async () => {
    try {
      const response = await fetch(`http://localhost:3000/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artworkId: art._id }),
      });

      if (response.ok) {
        setIsFavorited(true);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  return (
    <section className="max-w-6xl mx-auto my-16 px-6 md:px-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Artwork Image */}
        <img
          src={art.image}
          alt={art.title}
          className="rounded-2xl shadow-md w-full h-[420px] object-cover"
        />

        {/* Artwork Details */}
        <div>
          <h2 className="text-4xl font-extrabold mb-3">{art.title}</h2>
          <p><strong>Artist:</strong> {art.artistName}</p>
          <p><strong>Medium:</strong> {art.medium}</p>
          <p className="mt-4">{art.description}</p>

           <div className="flex gap-4 mt-6">
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition" >
               Like  </button>
 <button
              onClick={handleFavorites}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                isFavorited ? "bg-gray-300 text-gray-700" : "bg-yellow-400 text-white hover:bg-yellow-500"
              }`}
            >
              {isFavorited ? "Favorited" : "Add to Favorites"}
            </button>
          </div>

        </div>
      </div>

      {/* Artist Info */}
      <div className="mt-12 flex items-center gap-6 border-t pt-6">
        <img
          src={art.artistPhoto || "https://via.placeholder.com/80"}
          alt={art.artistName}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h4 className="font-bold">{art.artistName}</h4>
          <p>Total Artworks: {art.totalArtworks || 0}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetail;
