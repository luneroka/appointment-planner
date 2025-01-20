import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map(({ name, ...rest }, index) => {
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
