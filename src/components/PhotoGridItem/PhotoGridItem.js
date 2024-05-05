import React from 'react';
import styled from 'styled-components/macro';
import { generateImageSrcSet } from '../../utils/image';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const getImageSrcSetPerExtension = generateImageSrcSet(src);
  const avifImages = getImageSrcSetPerExtension('.avif');
  const jpgImages = getImageSrcSetPerExtension('.jpg');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={avifImages.join(",")}
          />
          <source
            type="image/jpg"
            srcSet={jpgImages.join(",")}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(auto, max-content);
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default PhotoGridItem;
