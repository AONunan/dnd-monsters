import React, {Component} from 'react';
import MonsterDetails from './MonsterDetails'
import MonsterTable from './MonsterTable'
import SearchBox from './SearchBox'

class App extends Component {

    state = {
        searchString: "",
        addedMonsters: []
    };

    monsterAdded = (monsterId) => {
        if(this.state.addedMonsters.includes(monsterId)) {
            console.log("Monster already in array");
        } else {
            this.state.addedMonsters.push(monsterId);
            this.state.addedMonsters.sort();
        }
        
    }

    render() {
        return (
            <div className="App">
                <h1>D&D Monsters</h1>
                <MonsterDetails testProp="hellomonsterdetails!" addedMonsters={this.state.addedMonsters} />
                <SearchBox handleTyping={(text) => this.setState({searchString: text})} />
                <p>Filter string (App component): {this.state.searchString}</p>
                <MonsterTable searchString={this.state.searchString} monsterAdded={this.monsterAdded} />
            </div>            
        );
    }
}

export default App;
