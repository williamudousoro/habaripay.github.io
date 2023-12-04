import { useState, useEffect, useRef } from "react";

const Dropdown = ({ selectedLanguage, setSelectedLanguage }) => {
  const languages = ["cURL", "Javascript", "Dart"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    // You can add logic here to change the code block text based on the selected language if needed
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add a global click event listener
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="group" ref={dropdownRef}>
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex cursor-pointer"
      >
        <p className="text-[#3F826D] text-[10px] md:text-xs dark:text-[#4CB393]">
          {selectedLanguage}
        </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-[#008488] dark:fill-[#4CB393] ml-1 mt-[2px]"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </span>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-20 m-0 top-11 right-0 p-1 bg-transparent border border-solid border-[#EBEBF2] dark:border-[#303337] rounded w-24">
          {languages.map((language) => (
            <p
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className="px-2 text-xs m-0 py-2 cursor-pointer hover:bg-[#E2EEF5] dark:hover:bg-[#101417] text-[#424242] dark:text-[#E2E8EF] rounded"
            >
              {language}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
