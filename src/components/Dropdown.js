import React, { useState } from 'react';
import idioma from '../img/name.png';
import './Dropdown.scss';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);

  };

  return (
    <div className='dropdown'>
        <div onClick={toggleDropdown} className='dropdownButton dropdown__toggle'>
          <img src={idioma} alt="idioma" />
          {selectedOption && (
        <p className="dropdown__selectedOption">{selectedOption.label}</p>
      )}
        </div>
        {isOpen && (
          <div  className="dropdown__menu">
            {options.map((option) => (
              <div key={option.value} className="dropdown__menu__item" onClick={() => handleSelect(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default Dropdown;
