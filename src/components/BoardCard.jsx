// components/BoardCard.jsx
import React from "react";

const BoardCard = ({ fullName, post, imgUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition-all">
      <img
        src={imgUrl}
        alt={fullName}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-orange-500"
      />
      <h3 className="text-lg font-bold text-gray-800">{fullName}</h3>
      <p className="text-sm text-gray-600">{post}</p>
    </div>
  );
};

export default BoardCard;
