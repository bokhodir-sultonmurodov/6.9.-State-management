import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api';

const UseDetail = () => {
   const navigate = useNavigate()
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`users/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-blue-950 p-10">
        Loading user details...
      </div>
    );
  }



  return (
    <div className="container mx-auto p-8 mt-20">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-3xl shadow-2xl p-10 space-y-8">
        <h2 className="text-4xl font-bold text-center">
          {data.name.firstname} {data.name.lastname}
        </h2>
        <p className="text-center text-gray-400 italic text-xl">@{data.username}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-300">
          <div>
           
            <p><strong>Phone:</strong> {data.phone}</p>
          </div>
          <div>
            <p><strong>Street:</strong> {data.address.street} #{data.address.number}</p>
            <p><strong>City:</strong> {data.address.city}</p>
            <p><strong>Zipcode:</strong> {data.address.zipcode}</p>
          </div>
          <div className="sm:col-span-2">
            <p>
              <strong>Location:</strong> Lat: {data.address.geolocation.lat}, Long: {data.address.geolocation.long}
            </p>
         
          </div>
        </div>

        <div className="text-center pt-6">
          <button
           onClick={()=> navigate(-1)}
            className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-200 cursor-pointer"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UseDetail);
