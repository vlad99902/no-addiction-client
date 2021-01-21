import React from 'react';

import '../styles/loader.css';

interface ILoader {
  display?: string;
}

export const Loader: React.FC<ILoader> = ({ display = 'block' }) => {
  return (
    <>
      <div className="wrapper">
        <div className="loader" style={{ display: display }}></div>
      </div>
    </>
  );
};
