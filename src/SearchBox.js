import React, {Component} from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        console.log(this.searchString);
    }

    handleChange = (event) => {
        const {value} = event.target;

        // console.log("Typing");
        // this.setState({
        //     filterString: value
        // })

        // this.props.

        this.props.handleTyping(value);
    };

    // 

    render() {
        return (
            <div>
                <input type="text" value={this.props.filterString} onChange={this.handleChange} />
            </div>
        );
        
    }
}

export default SearchBox;
