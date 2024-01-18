import { useState, useEffect } from 'react';

const useLocalStorage = (key, intialvalue) => {
  // Retrieve the stored value from localStorage, or use the initialValue
  const storedValue = JSON.parse(localStorage.getItem(key)) || intialvalue;

  // State to hold the current value
  const [value, setValue] = useState(storedValue);

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
