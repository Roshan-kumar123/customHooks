import { useState } from 'react';
import useDebounce from './customHooks/useDebounce';

const UseDebouncedValue = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000);

  return (
    <div>
      <input
        type='text'
        placeholder='Type here...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default UseDebouncedValue;
