import React, {Component} from 'react';
import MonsterTable from './MonsterTable'
import SearchBox from './SearchBox'

class App extends Component {

    state = {
        searchString: ""
    };

    render() {
        return (
            <div className="App">
                <h1>D&D Monsters</h1>
                <SearchBox handleTyping={(text) => this.setState({searchString: text})} />
                <p>Filter string (App component): {this.state.searchString}</p>
                <MonsterTable searchString={this.state.searchString} />
            </div>            
        );
    }
}

export default App;
