import React from 'react';
import { Background } from '../assets/Background';

import '../styles/loader.css';

interface ILoader {
  isLoading?: boolean;
}

export const Loader: React.FC<ILoader> = ({ isLoading = false }) => {
  return (
    <>
      <div className="wrapper" style={{ display: isLoading ? 'flex' : 'none' }}>
        <Background />
        <div className="loader" />
      </div>
    </>
  );
};
