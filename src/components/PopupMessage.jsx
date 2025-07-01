import React, { useEffect, useState } from 'react';

const PopupMessage = ({ message, onClose, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
        <div className="fixed inset-0 z-[9998] bg-white bg-opacity-80 flex items-center justify-center"/>
        <div className="bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl border border-yellow-400 animate-popup-slide z-[9999] max-w-[90%] text-center"/>

      {/* Centered Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl 
                      z-[9999] border border-yellow-400 transition-all duration-500 
                      ease-in-out animate-popup-slide">
        {message}
      </div>
    </>
  );
};

export default PopupMessage;
