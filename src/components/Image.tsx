import React from "react";

import styled from "styled-components";

type ImageType = {
  src: string;
  alt?: string;
  width?: string;
  margin?: string;
  fixedSize?: boolean;
};

export const Image: React.FC<ImageType> = ({
  src,
  alt = "",
  width,
  margin,
  fixedSize = false,
}) => {
  return (
    <ImageWrapper width={width} margin={margin}>
      <Img src={src} alt={alt} widthFixed={fixedSize && width} />
    </ImageWrapper>
  );
};

type ImageWrapperType = { width?: string; margin?: string };

const ImageWrapper = styled.div<ImageWrapperType>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const Img = styled.img<{ widthFixed?: string | false }>`
  width: ${(props) => props.widthFixed};
  max-width: 100%;
  height: auto;
  display: block;
`;
