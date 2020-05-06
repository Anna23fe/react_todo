import React from 'react';

import './SearchBlock.css';

const SearchBlock = () => {

    const searchBlockText = 'What do u want to search';
    return (
        <div className="search-block">
        <input placeholder={searchBlockText}></input>
        </div>
    )
}
export default SearchBlock;