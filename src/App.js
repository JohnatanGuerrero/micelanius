import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
  { label: 'Opción 1', value: 'opcion1' },
  { label: 'Opción 2', value: 'opcion2' },
  { label: 'Opción 3', value: 'opcion3' },
];


function App() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
        <div>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>

    </div>
  );
}

export default App;
