import React, {Component} from 'react';
import MonsterTable from './MonsterTable'
import SearchBox from './SearchBox'

class App extends Component {

    state = {
        filterString: ""
    };

    handleTyping = text => {
        this.setState({
            filterString: text
        })
    };

    render() {
        return (
            <div className="App">
                <h1>D&D Monsters</h1>
                <SearchBox handleTyping={this.handleTyping} />
                <p>Filter string (App component): {this.state.filterString}</p>
                <MonsterTable filterString={this.state.filterString} />
            </div>

            
        );
    }
}

export default App;
