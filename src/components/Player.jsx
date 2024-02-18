import React from 'react';
import ReactPlayer from 'react-player/lazy';
const Player = ({ width = '300px', url = 'https://www.youtube.com/watch?v=U9rUTPhLwy0' }) => {
  return (
    <>
      <ReactPlayer
        controls={true}
        width={width}
        light={true}
        height="400px"
        style={{ borderRadius: '20px' }}
        url={url}
      />
    </>
  );
};

export default Player;
