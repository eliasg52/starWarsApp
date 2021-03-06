import React from 'react';
import Character from '../components/Character';
import { getCharacters, getCharacter } from '../helpers/getCharacters';
import { useState, useEffect } from 'react';
import Search from '../components/Search';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  console.log(characters.length);

  useEffect(() => {
    input
      ? getCharacter(setCharacters, input)
      : getCharacters(setCharacters, page);
  }, [input, page]);

  const pageHandler = (operation) => {
    if (operation === '+' && page < 9) setPage(page + 1);
    if (operation === '-' && page > 1) setPage(page - 1);
  };

  return (
    <>
      <Search state={setInput} />
      <br />
      <br />
      {!input && (
        <div>
          <button onClick={() => pageHandler('-')}>PREV</button>
          --{page}--
          <button onClick={() => pageHandler('+')}>NEXT</button>
        </div>
      )}

      <ul>
        {characters.length > 0
          ? characters?.map((character, index) => {
              return (
                <li key={index}>
                  <Character {...character} />
                </li>
              );
            })
          : 'No hay resultados'}
      </ul>
    </>
  );
};

export default Home;
