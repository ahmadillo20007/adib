import React, { useState } from 'react';
import { Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const HeartIcon = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <IconButton
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Favorite color={hover ? 'secondary' : 'inherit'} />
    </IconButton>
  );
};

export default HeartIcon;