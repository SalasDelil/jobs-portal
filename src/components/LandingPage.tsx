import { useState } from "react";
import Posts from "../posts/Posts";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most relevant");
  const [count, setCount] = useState(0);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Most relevant", "Newest", "Oldest"];

  return (
    <div className="flex flex-col justify-start items-start w-9/12 mx-auto pt-16 text-custom-color">
      <div className="flex justify-between items-center w-full">
        <div className="">
          <div className="font-black text-custome-size1">Opportunities</div>
          <span>Showing {count} results</span>
        </div>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none"
              onClick={toggleDropdown}
            >
              <span className="text-gray-500">Sort by: </span>
              <span className="font-semibold ml-2">{selectedOption}</span>
              <svg
                className={`ml-2 h-5 w-5 text-indigo-500 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {options.map((option) => (
                  <button
                    key={option}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Posts setCount={setCount}/>
    </div>
  );
};

export default LandingPage;
