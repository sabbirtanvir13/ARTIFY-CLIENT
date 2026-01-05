import React from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";

const MyLikes = () => {
  const { User } = useAuth();

  const { data: myLikes = [], isLoading } = useQuery({
    queryKey: ["my-likes", User?.email],
    enabled: !!User?.email,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/my-likes`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center"><Loading></Loading></p>;
  }

  return (
    <div className="p-6 bg-base-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
         My Likes
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Artwork</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myLikes.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-400">
                  No liked artworks yet
                </td>
              </tr>
            )}

            {myLikes.map((art, index) => (
              <tr key={art._id} className="hover">
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="w-14 rounded-lg">
                      <img src={art.image} alt={art.title} />
                    </div>
                  </div>
                </td>

                <td className="font-medium">{art.title}</td>

                <td>
                  <span className="badge badge-error badge-outline">
                     {art.likes || 0}
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-outline btn-error">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLikes;
