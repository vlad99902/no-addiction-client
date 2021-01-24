import React from 'react';

import styled from 'styled-components';

type ImageType = {
  src: string;
  alt?: string;
  width?: string;
  margin?: string;
  fixedSize?: boolean;
  onClick?(): void;
  cursor?: 'pointer';
};

export const Image: React.FC<ImageType> = ({
  src,
  alt = '',
  width,
  margin,
  fixedSize = false,
  onClick,
  cursor,
}) => {
  return (
    <ImageWrapper width={width} margin={margin}>
      <Img
        src={src}
        alt={alt}
        widthFixed={fixedSize && width}
        onClick={onClick}
        cursor={cursor}
      />
    </ImageWrapper>
  );
};

type ImageWrapperType = { width?: string; margin?: string };

const ImageWrapper = styled.div<ImageWrapperType>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const Img = styled.img<{ widthFixed?: string | false; cursor?: string }>`
  width: ${(props) => props.widthFixed};
  cursor: ${(props) => props.cursor};
  max-width: 100%;
  height: auto;
  display: block;
`;
