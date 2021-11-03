import React from 'react';
import './Search.css';



export class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            //Reminder: change date to current date
            date: ''
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    };

    handleDateChange (event) {
        this.setState({
            date: event.target.value
        });
    };

    handleSearch (event) {
        this.props.searchRAWG(this.state.date);
        event.preventDefault();
    }
    

    render () {
        return (
            <div className="search-selection">
                <div className='search-fields'>
                    <input onChange={this.handleDateChange} type='date' />
                    <button onClick={this.handleSearch} className='btn btn-primary'> 
                        Search Games!
                    </button>
                </div>
            </div>
        )
    };
}