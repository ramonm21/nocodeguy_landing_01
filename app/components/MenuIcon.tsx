'use client';

interface MenuIconProps {
  isOpen: boolean;
}

export default function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <div className="relative w-6 h-5 cursor-pointer">
      <span 
        className={`absolute h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
          isOpen 
            ? "w-6 rotate-45 top-2.5" 
            : "w-6 top-0"
        }`}
      />
      <span 
        className={`absolute h-0.5 w-6 bg-gray-600 top-2.5 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span 
        className={`absolute h-0.5 bg-gray-600 transition-all duration-300 ease-out ${
          isOpen 
            ? "w-6 -rotate-45 top-2.5" 
            : "w-6 top-5"
        }`}
      />
    </div>
  );
}
