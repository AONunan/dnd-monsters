import React, {Component} from 'react';

class SearchBox extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search for a monster" value={this.props.filterString} onChange={(event) => {
                    const {value} = event.target;
                    this.props.handleTyping(value);
                }} />
            </div>
        );
        
    }
}

export default SearchBox;
