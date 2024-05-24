import React, { useState, ChangeEvent } from 'react';
import Input from './component/input';
import Button from './component/button';
import Table from './component/table';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<Array<{ name: string }>>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setData([...data, { name: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <h1>Dynamic Components</h1>
      <div className="input-container">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter name"
        />
        <Button
          onClick={handleButtonClick}
          text="Add"
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default App;
