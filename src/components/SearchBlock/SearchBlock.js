import React from 'react';

import './SearchBlock.css';


class SearchBlock extends React.Component {
    state = {
        detectedText: '',
    };
    onSearchChange = (event) => {
        const detectedText = event.target.value;
        this.setState({
            detectedText: detectedText,
        });
        this.props.onSearchChange(detectedText);
    }

    render() {
        const searchBlockText = 'What do u want to search?';
    return (
        <div className="search-block d-flex">

        <input 
        className= "form-control"
        placeholder={searchBlockText}
        value={this.state.detectedText}
        onChange = {this.onSearchChange} />
      
        </div>
    );
    }
}
export default SearchBlock;