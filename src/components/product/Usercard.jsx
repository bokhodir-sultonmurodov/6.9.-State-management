import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Usercard = ({ data }) => {

   const navigate = useNavigate()
  return (
     <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-3xl shadow-xl p-6 flex flex-col justify-between min-h-[340px] "
          >
            <div>
              <div className="text-center mb-4">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  {item.name.firstname} {item.name.lastname}
                </h2>
                <p className="text-gray-400 italic mt-1 text-sm md:text-base">@{item.username}</p>
              </div>

              <div className="text-center text-gray-300 space-y-1 text-sm md:text-base">
                <p>{item.address.street}, {item.address.city}</p>
                <p>{item.phone}</p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/user/${item.id}`)}
              className="mt-6 w-full bg-white text-gray-900 font-semibold py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}



export default React.memo(Usercard)