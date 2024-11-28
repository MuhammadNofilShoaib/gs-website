import React from 'react';

function Page() {
  return (
    <div className="grid justify-center items-center grid-cols-10 grid-rows-5 gap-8 p-16 text-center bg-gray-100 min-h-screen text-2xl uppercase text-white font-bold italic">
      <div className="bg-cyan-500 h-full w-full row-span-6 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 1
      </div>
      <div className="bg-lime-500 h-full w-full col-span-8 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 2
      </div>
      <div className="bg-purple-500 h-full w-full row-span-6 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 3
      </div>
      <div className="bg-yellow-500 h-full w-full col-span-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 4
      </div>
      <div className="bg-green-500 h-full w-full col-span-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 5
      </div>
      <div className="bg-orange-500 h-full w-full row-span-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 6
      </div>
      <div className="bg-blue-500 h-full w-full col-span-7 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 7
      </div>
      <div className="bg-red-500 h-full w-full col-span-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 8
      </div>
      <div className="bg-emerald-500 h-full w-full col-span-3 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 9
      </div>
      <div className="bg-pink-500 h-full w-full col-span-7 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 flex items-center justify-center">
        Box 10
      </div>
    </div>
  );
}

export default Page;
