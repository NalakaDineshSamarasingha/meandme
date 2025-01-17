import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ToggleButton() {
  const [active, setActive] = useState('work'); // 'work' or 'info'
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    setActive(type);
    navigate(type === 'work' ? '/' : '/info');
  };




  return (
    <div className="relative flex items-center bg-[rgba(30,30,30,0.6)] rounded-full p-1 shadow-md w-56">
      {/* Highlight Bar */}
      <div
        className={`absolute top-0 bottom-0 m-auto h-full w-1/2 rounded-full bg-gradient-to-r from-[#ffffff] to-[#cccccc] shadow-md transition-all duration-300 ${
          active === 'work' ? 'left-0' : 'left-1/2'
        }`}
      ></div>

      {/* Work Button */}
      <div
        className={`relative z-10 w-1/2 text-center py-2 cursor-pointer text-sm font-medium ${
          active === 'work' ? 'text-black' : 'text-gray-400'
        }`}
        onClick={() => handleNavigation('work')}
      >
        Work
      </div>

      {/* Info Button */}
      <div
        className={`relative z-10 w-1/2 text-center py-2 cursor-pointer text-sm font-medium ${
          active === 'info' ? 'text-black' : 'text-gray-400'
        }`}
        onClick={() => handleNavigation('info')}
      >
        Info
      </div>
    </div>
  );
}

export default ToggleButton;
