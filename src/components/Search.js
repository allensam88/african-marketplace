import React, { useState } from "react";

  function SearchForm(props) {
    const [searchQuery, setQuery] = useState("");
    const handleChanges = event => {
      setQuery(event.target.value);
    };
  
    const submitHandler = event => {
      event.preventDefault();
      const filter = props.items.filter(item => {
        return item.name.indexOf(searchQuery) !== -1;
      });
     props.search(filter);
    };
   
    return (
      <section>
        <form className="search-form" onSubmit={submitHandler}>
          <input className="search-input" onChange={handleChanges}
          type='text'
          placeholder='Search marketplace...'
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </section>
    );
}
  
  export default SearchForm;