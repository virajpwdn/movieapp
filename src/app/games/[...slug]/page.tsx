import React from "react";
import { games } from "@/data/games";
import { FaStar } from "react-icons/fa";

const MainGamePage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  const [category, gameSlug] = slug;

  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) return <h1>No Games Are Available!!!</h1>;
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">
          {game.title}
        </h1>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">{game.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span>Release Date: {game.releaseDate}</span>
          </div>

          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span>Rating: {game.rating} / 10</span>
          </div>

          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span>Developers: {game.developer}</span>
          </div>

          <div className="flex items-center bg-gray-800 p-4 rounded-lg">
            <FaStar className="text-yellow-400 mr-2" />
            <span>Platform: {game.platforms.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGamePage;
