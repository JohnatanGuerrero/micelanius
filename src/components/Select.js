import { useState } from 'react';
import appleIcon from './icons/apple.png';
import orangeIcon from './icons/orange.png';
import grapeIcon from './icons/grape.png';
import './Select.css';

const options = [
  { id: 1, label: 'Opción 1', icon: appleIcon },
  { id: 2, label: 'Opción 2', icon: orangeIcon },
  { id: 3, label: 'Opción 3', icon: grapeIcon },
];

function Select() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    alert(`Seleccionaste la opción ${event.target.value}`);
  };

  return (
    <div>
      {options.map((option) => (
        <>
          {/* Render a radio group, when the user selects an option, set the state */}
          <label>
            <input
              type="radio"
              name="option"
              value={option.id}
              onChange={handleChange}
            />
            <img src={option.icon} alt={option.label} />
          </label>
        </>
      ))}
    </div>
  );
}

export default Select;