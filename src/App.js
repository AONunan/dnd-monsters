import React, {Component} from 'react';
import MonsterDetails from './MonsterDetails'
import MonsterTable from './MonsterTable'
import SearchBox from './SearchBox'
import Footer from './Footer'
import monstersJson from './Data/5e-SRD-Monsters.json'

class App extends Component {

    state = {
        searchString: "",
        addedMonsters: []
    };

    monsterAdded = (newMonsterValue) => {
        if(this.state.addedMonsters.includes(newMonsterValue)) {
            // Monster exists. Remove it
            this.setState(prevState => ({
                addedMonsters: prevState.addedMonsters.filter((monster) => monster !== newMonsterValue)
            }));

        } else {
            // Monster doesn't exist. Add it
            this.setState(prevState => ({
                addedMonsters: [...prevState.addedMonsters, newMonsterValue].sort()
            }));
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <h1>D&D Monsters</h1>
                    <MonsterDetails addedMonsters={this.state.addedMonsters} monsterAdded={this.monsterAdded} />
                    <SearchBox handleTyping={(text) => this.setState({searchString: text})} />
                    <MonsterTable searchString={this.state.searchString} monsterAdded={this.monsterAdded} />
                    <Footer />
                </div>
            </div>            
        );
    }
}

export default App;
