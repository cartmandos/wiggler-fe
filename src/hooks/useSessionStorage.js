import { useState } from 'react';

export const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = getSessionStorage(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setSessionStorage(key, value);
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      removeSessionStorage(key);
      setStoredValue(null);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

const setSessionStorage = (key, value) => {
  const storeValue = JSON.stringify(value);
  sessionStorage.setItem(key, storeValue);
};

const getSessionStorage = (key) => {
  const storeItem = sessionStorage.getItem(key);
  return storeItem ? JSON.parse(storeItem) : null;
};

const removeSessionStorage = (key) => {
  sessionStorage.removeItem(key);
};
