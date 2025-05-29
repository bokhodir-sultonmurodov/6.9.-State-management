import React from 'react';
import { useStateValue } from '../../context/index';
import { FaRegHeart } from 'react-icons/fa';

const Liked = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="p-4 container mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-4 lg:grid-cols-4">
        {state.wishlist?.map(item => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-xl shadow-lg p-5 flex flex-col items-start relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain bg-white rounded-lg mb-4 p-3 shadow-inner"
            />

            <button
              onClick={() => dispatch({ type: "LIKED", payload: item })}
              className="absolute top-4 right-4 bg-white text-red-500 hover:text-red-600 p-2 rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
              title="Unlike"
            >
              <FaRegHeart className="text-xl" />
            </button>

            <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300 mb-1">Price: ${item.price}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Liked;
