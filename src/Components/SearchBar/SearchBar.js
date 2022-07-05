import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.search(); 
        }
    }
   
    render() {
        return (
            <div className="SearchBar">
                <input onKeyUp={this.handleKeyPress.bind(this)} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton" onKeyDown={this.search} onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;