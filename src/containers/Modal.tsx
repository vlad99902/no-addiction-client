import React from 'react';
import styled from 'styled-components';

type ModalType = {
  children: React.ReactNode;
  isOpened: boolean;
  setIsOpened: () => void;
  maxWidth?: string;
};

export const Modal: React.FC<ModalType> = ({
  children,
  isOpened,
  setIsOpened,
  maxWidth,
}) => {
  return (
    <>
      {isOpened && (
        <ModalWrapper onClick={() => setIsOpened()}>
          <ModalContent onClick={(e) => e.stopPropagation()} width={maxWidth}>
            {children}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #00000099;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
`;

const ModalContent = styled.div<{ width?: string }>`
  position: relative;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 20px;
  max-width: ${(props) => props.width};
  width: ${(props) => props.width};
`;
