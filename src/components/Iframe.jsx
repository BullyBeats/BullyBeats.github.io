import React from 'react';

export default function Iframe(props) {
  const { src = '', height = 300 } = props;
  const player = `<iframe width="100%" height="${height}" scrolling="no" frameborder="no" src="${src}"></iframe>`;
  return (
    <div className='Iframe' dangerouslySetInnerHTML={{ __html: player }} />
  );
}
