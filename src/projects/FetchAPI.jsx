import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from 'react-icons/fa6';

function FetchAPI() {
  const [userData, setUserData] = useState([]);

  const API_URL = 'https://randomuser.me/api/?results=3';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUserData(data.results));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center min-h-screen">
      {userData.map(data => (
        <div
          className="border-2 w-80 rounded-2xl shadow-lg p-8 from-0% flex flex-col gap-8"
          key={data.email}
        >
          <div className="">
            <img
              className="rounded-full m-auto"
              src={data.picture.large}
              alt={`${data.name.first} Picture`}
            />
          </div>

          <div className="text-center flex flex-col gap-2">
            <p className="text-xl">
              {data.name.first} {data.name.last}
            </p>
            <p className="text-sm">{data.email}</p>
          </div>

          <div className="flex items-center justify-evenly">
            <FaFacebook size={30} />
            <FaSquareXTwitter size={30} />
            <FaSquareInstagram size={30} />
            <FaSquareSnapchat size={30} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchAPI;
