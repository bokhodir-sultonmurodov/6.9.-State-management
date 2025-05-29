import { useStateValue } from '../../context/index';
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Productss = ({ data }) => {
  const [state, dispatch] = useStateValue();

  const navigate = useNavigate()
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-xl shadow-lg p-5 flex flex-col items-start relative"
          >
            <img
              src={item.image}
              alt="Image"
              className="w-full h-48 object-contain bg-white rounded-lg mb-4 p-3 shadow-inner"
            />

            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300 mb-1">Rating: {item.rating.rate} ★</p>
            <p className="text-sm text-gray-400 mb-2">Left: {item.rating.count}</p>
            <strong className="text-xl text-white font-semibold mb-4 flex-1">${item.price}</strong>

            <div className="w-full flex justify-between items-center mt-2">
              <button
                onClick={() => navigate(`product/${item.id}`)}
                className="bg-white hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md font-medium transition cursor-pointer"
              >
                Buy now
              </button>

              <button
                onClick={() => dispatch({ type: "LIKED", payload: item })}
                className="bg-white text-red-500 hover:text-red-600 p-2 rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                title="Like"
              >
                <FaRegHeart className="text-xl" />
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>

  )
}

export default React.memo(Productss)