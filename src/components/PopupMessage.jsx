import React, { useEffect, useState } from 'react';

const PopupMessage = ({ message, onClose, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 z-[9998]"></div>

      {/* Popup (with responsive top position) */}
      <div className="
        fixed 
        top-[40%] md:top-1/2 
        left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 
        bg-gray-900 text-white px-6 py-4 
        rounded-xl shadow-2xl z-[9999] 
        border border-yellow-400 
        transition-all duration-500 ease-in-out 
        animate-popup-slide
        max-w-[90%] text-center
      ">
        {message}
      </div>
    </>
  );
};

export default PopupMessage;
