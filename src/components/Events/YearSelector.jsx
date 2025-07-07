import React from "react";
import { useNavigate } from "react-router-dom";

const years = ["2024", "2025"];

const YearSelector = ({ selectedYear, onChange }) => {
  const navigate = useNavigate();

  const handleClick = (year) => {
    if (year === "2025") {
      navigate("/ComingSoon");
    } else {
      onChange(year);
    }
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-10">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => handleClick(year)}
          aria-pressed={selectedYear === year}
          className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ease-in-out ${
            selectedYear === year
              ? "bg-yellow-400 text-black ring-2 ring-yellow-300"
              : "bg-gray-800 hover:bg-yellow-500 hover:text-black"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearSelector;
