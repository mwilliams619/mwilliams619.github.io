import { useEffect } from 'react';

export const useBgColor = (color) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = color;

    return () => {
      body.style.backgroundColor = 'initial';
    };
  }, [color]);
};