import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { menuItems } from ".";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [, setSelectedSubItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (name: string, url: string) => {
    setSelectedItem(name);
    setSelectedSubItem("");
    setOpenDropdown(null); 
    navigate(url);
  };

  const handleSubSelect = (name: string, url: string) => {
    setSelectedSubItem(name);
    setOpenDropdown(null); 
    navigate(url);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="flex gap-4  text-white">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`relative cursor-pointer p-2 ${
              selectedItem === item.name ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => handleSelect(item.name, item.url)}
          >
            <div className="flex items-center gap-2">
              {item.name}
              {item.subItems && item.subItems.length > 0 && (
                <button onClick={(e) => { 
                  e.stopPropagation(); 
                  toggleDropdown(item.name); 
                }}>
                  {openDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {openDropdown === item.name && item.subItems && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md w-40 z-10">
                <ul>
                  {item.subItems.map((subItem, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-black"
                      onClick={() => handleSubSelect(subItem.name, subItem.url)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
