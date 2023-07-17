import React from 'react';

const wordData = {
  item1: { name: 'Word 1', type: 'adjectives' },
  item2: { name: 'Word 2', type: 'nouns' },
  item3: { name: 'Word 3', type: 'verbs' },
  item4: { name: 'Word 4', type: 'verbs' },
  item5: { name: 'Word 5', type: 'prepositions' },
};

const Filter = ({ type }) => {
  const filteredWords = Object.values(wordData).filter(item => item.type === type);
//   console.log(filteredWords)
//   console.log(filteredWords[0].name)
  console.log(filteredWords.map(item => item.name))
  return (
    <div>
        <div>{filteredWords[0].name}</div>
      <h3>{type}:</h3>
      <ul>
        {filteredWords.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;