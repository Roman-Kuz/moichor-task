import React from 'react';
import Item from './item';

const ItemsList = ({ list, ...props }) => {
  return (
    <>
      {list.map((item) => (
        <Item key={item.id} item={item} {...props} />
      ))}
    </>
  );
};

export default ItemsList;
