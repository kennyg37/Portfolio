import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState } from "react";

interface DropdownProps {
  options: { name: string; url: string }[];
  handleSubSelect: (name: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, handleSubSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white border rounded shadow-md">
          <ul>
            {options.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                onClick={() => handleSubSelect(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;