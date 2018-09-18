import React, {Component} from 'react';

class SearchBox extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" class="form-control" placeholder="Search for a monster" value={this.props.filterString} onChange={(event) => {
                        const {value} = event.target;
                        this.props.handleTyping(value);
                    }} />
                </div>
            </form>
        );
        
    }
}

export default SearchBox;
