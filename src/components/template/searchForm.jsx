import React from 'react';

const SearchForm = (props) => {
    return <form>
        <input className="input-area" placeholder='search'/>
        <button type="button" className="btn-primary"><i className="fas fa-search"></i></button>
    </form>
};

export default SearchForm;