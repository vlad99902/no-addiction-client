import React from 'react';

import { Button } from '../components/Button';

export const MainPage: React.FC = () => {
  return (
    <>
      <Button onClick={() => console.log('пизда')} type="smallText">
        Отказаться от алкоголя
      </Button>
    </>
  );
};
