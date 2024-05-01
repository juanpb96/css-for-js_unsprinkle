import React from 'react';
import styled from 'styled-components/macro';
import { generateImageSrcSet } from '../../utils/image';

const Hero = () => {
  const imageSrc = "/images/hero-img.jpg";
  const getImageSrcSetPerExtension = generateImageSrcSet(imageSrc);
  const avifImages = getImageSrcSetPerExtension('.avif');
  const jpgImages = getImageSrcSetPerExtension('.jpg');

  return (
    <Wrapper>
      <HeroImage>
        <source
          type="image/avif"
          srcSet={avifImages.join(",")}
        />
        <source
          type="image/jpg"
          srcSet={jpgImages.join(",")}
        />
        <img alt="" src={imageSrc} />
      </HeroImage>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.picture`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
