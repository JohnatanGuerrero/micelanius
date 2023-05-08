import { useState } from 'react';
import appleIcon from './icons/apple.png';
import orangeIcon from './icons/orange.png';
import grapeIcon from './icons/grape.png';
import './Select.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className='tooltip'>
      {props.label}
    </Tooltip>
  );

  return (
    <div>
      {options.map((option) => (
        <>
          {/* Render a radio group, when the user selects an option, set the state */}
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip(option)}
          >
            <label>
              <input
                type="radio"
                name="option"
                value={option.id}
                onChange={handleChange}
              />
              <img src={option.icon} alt={option.label} />
            </label>
          </OverlayTrigger>
        </>
      ))}
    </div>
  );
}

export default Select;