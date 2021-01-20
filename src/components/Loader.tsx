import React from 'react';

import styled from 'styled-components';

import '../styles/loader.css';

interface ILoader {
  display: string;
}

export const Loader: React.FC<ILoader> = ({ display = 'block' }) => {
  return (
    <>
      <div className="loader" style={{ display: display }}></div>
    </>
  );
};
