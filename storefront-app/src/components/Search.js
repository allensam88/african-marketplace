import React, { useState } from "react";
import { Button } from '@material-ui/core';

function SearchForm(props) {
  const [result, setResult] = useState();
  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const filter = props.characters.filter(character => {
      return character.name.indexOf(result) !== -1;
    });
    console.log(filter, result);
   props.search(filter);
  };
 
  return (
    <section>
      <form onSubmit={submitHandler}>
        <input onChange={handleChanges}
        type='text'
        name='character'
        id='character'
        placeholder='Search'
        />
        <Button>Search</Button>
      </form>
    </section>
  );
}

export default SearchForm;