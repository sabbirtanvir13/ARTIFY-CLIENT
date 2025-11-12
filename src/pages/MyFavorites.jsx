import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const MyFavorites = () => {
  const { User } = useContext(AuthContext); // logged-in user
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!User?.email) return;

    const fetchFavorites = async () => {
      try {
        const res = await fetch(`http://localhost:3000/favorites?email=${User.email}`);
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.error("Failed to fetch favorites:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [User]);

  if (loading) return <p className="text-center mt-10">Loading favorites...</p>;
  if (!favorites.length) return <p className="text-center mt-10">No favorites yet!</p>;

  return (
    <section className="max-w-6xl mx-auto my-16 px-6 md:px-10">
      <h2 className="text-3xl font-bold mb-8">My Favorites</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((art) => (
          <div key={art._id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{art.title}</h3>
              <p className="text-gray-500 text-sm">{art.artistName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyFavorites;
