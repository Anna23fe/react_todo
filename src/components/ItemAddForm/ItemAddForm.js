import React from 'react';

export default class ItemAddForm extends React.Component {

    state = {
        inputText: ''
    };

    onInputTextChange = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdd(this.state.inputText);
        this.setState({
            inputText: ''
        });
    }

    render() {
        return (
            <form 
                className="ItemAddForm d-flex"
                onSubmit={this.onSubmit}
            >

                <input 
                    className="form-control mr-5"
                    type="text" placeholder="add new business"
                    onChange={this.onInputTextChange}
                    value={this.state.inputText}
                />
                
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        )
    }

}