import Link from "next/link";
import React from "react";

const Movies = () => {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
  ];
  return (
    <div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
        <ul className="space-y-4">
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
                <Link
                  href={`/movies/${movie.id}`}
                  className="text-blue-400 hover:text-blue-600"
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
