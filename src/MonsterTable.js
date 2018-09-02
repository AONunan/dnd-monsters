import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
            </tr>
        </thead>
    );
}

class TableBody extends Component {
    
    state = {
        monsters: [],
        url: "http://www.dnd5eapi.co/api/monsters/"
    };

    // const monsters = [
    //     {
    //         "name": "Dragon",
    //         "hit_points": 195
    //     },
    //     {
    //         "name": "Bandit",
    //         "hit_points": 11
    //     },
    //     {
    //         "name": "Fire Giant",
    //         "hit_points": 162
    //     },
    //     {
    //         "name": "Goblin",
    //         "hit_points": 7
    //     },
    //     {
    //         "name": "Vampire",
    //         "hit_points": 45
    //     },
    //     {
    //         "name": "Orc",
    //         "hit_points": 70
    //     },
    // ];

    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                monsters: data.results
            });
        });
    }
    
    render() {
        const { monsters } = this.state;

        let monstersToDisplay = monsters.filter(monster => monster.name.toLowerCase().includes(this.props.searchString));

        const rows = monstersToDisplay.map((monster) => {
            return (
                <tr>
                    <td>{monster.name}</td>
                    <td>{this.props.testValue}</td>
                </tr>
            );
        });
    
        return <tbody>{rows}</tbody>;
    }
}

class MonsterTable extends Component {
    render() {

        return (
            <table>
                <TableHeader />
                <TableBody searchString={this.props.searchString} />
            </table>
        );
    }
}

export default MonsterTable;
