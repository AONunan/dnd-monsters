import React, {Component} from 'react';
import MonsterDetails from './MonsterDetails'
import MonsterTable from './MonsterTable'
import SearchBox from './SearchBox'
import Footer from './Footer'
import monstersJson from './Data/5e-SRD-Monsters.json'

class App extends Component {

    state = {
        searchString: "",
        addedMonstersList: []
    };

    addOrRemoveMonster = (newMonsterValue) => {
        if(this.state.addedMonstersList.includes(newMonsterValue)) {
            // Monster exists. Remove it
            this.setState(prevState => ({
                addedMonstersList: prevState.addedMonstersList.filter((monster) => monster !== newMonsterValue)
            }));

        } else {
            // Monster doesn't exist. Add it
            this.setState(prevState => ({
                addedMonstersList: [...prevState.addedMonstersList, newMonsterValue].sort()
            }));
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <h1>D&D Monsters</h1>
                    <MonsterDetails addedMonstersList={this.state.addedMonstersList} addOrRemoveMonster={this.addOrRemoveMonster} />
                    <SearchBox handleTyping={(text) => this.setState({searchString: text})} />
                    <MonsterTable searchString={this.state.searchString} addOrRemoveMonster={this.addOrRemoveMonster} />
                    <Footer />
                </div>
            </div>            
        );
    }
}

export default App;
