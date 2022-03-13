import React from 'react';
import { useState } from 'react';

const Search = ({ state }) => {
  const handleInput = (e) => {
    state(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={(e) => handleInput(e)}
    />
  );
};

export default Search;
